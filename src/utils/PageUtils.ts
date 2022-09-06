import { arrToObj } from "./ObjUtils";

import type { Component } from "../../types/Component";

export function getSearchParams(url: URL | Location = document.location): { [searchParam: string]: string }
{
	return arrToObj(
		url
			.search
			.substring(1)
			.split("&"),
		param => param.substring(0, param.indexOf("=")),
		param => param.substring(param.indexOf("=") + 1)
	);
}

export function removeElementById(id: string | null)
{
	if (!id)
		return;

	let element = document.getElementById(id);
	if (element)
		element.parentNode.removeChild(element);
};

export function elementize<
	TagName extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap,
>(component: Component<TagName>): HTMLElementTagNameMap[TagName]
{
	const [tagName, attributes, ...children] = component;
	const element = Object.assign(
		document.createElement(tagName),
		attributes ?? {}
	);
	const elementChildren = children
		?.filter(child =>
			child !== null && child !== undefined
		)
		?.map(child =>
		{
			switch (typeof child)
			{
				case "string":
					return child;
				case "object":
					if (Array.isArray(child))
						return elementize(child);
					else
						return child;
				default:
					return `${child}`;
			}
		});
	if (elementChildren && elementChildren.length > 0)
	{
		element.append(...elementChildren);
	}
	return element;
}

export function render(
	parentElement: Element | null,
	components: (Component | Element | Node | string)[],
	insertAt: "start" | "end" = "end"
): void
{
	if (!parentElement || !components || components.length === 0)
		return;
	const elements = components
		.filter(comp => comp)
		.map(comp => Array.isArray(comp)
			? elementize(comp)
			: comp
		);
	switch (insertAt)
	{
		case "start":
			parentElement.prepend(...elements);
			break;
		case "end":
		default:
			parentElement.append(...elements);
			break;
	}
}