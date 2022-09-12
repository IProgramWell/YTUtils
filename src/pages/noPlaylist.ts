import type YTUModule from "../modules/YTUModule";
import type { Component } from "../../types/Component";

export function addNoPLControls(this: YTUModule)
{
	const { urlUtils, pageUtils } = this.utils;
	const centered = "float: left; top: 50%; white-space: nowrap;";
	const newTabCheckboxID = "ytutils-noplaylist-newtabcheckbox";
	const newTabCheckboxLabelID = "ytutils-noplaylist-newtabcheckbox-label"
	const noPLButtonID = "ytutils-noplaylist-noplbtn";
	this.setStateValue?.("newTabCheckboxID", newTabCheckboxID);
	this.setStateValue?.("noPLButtonID", noPLButtonID);
	this.setStateValue?.("newTabCheckboxLabelID", newTabCheckboxLabelID);

	const newTabCheckbox: Component = [
		"input",
		{
			type: "checkbox",
			id: newTabCheckboxID,
			style: `${centered} transform: translateY(50%)`,
			name: newTabCheckboxID,
			title: "Open in new tab",
		},
	];
	const newtabcheckboxLabel: Component = [
		"label",
		{
			htmlFor: newTabCheckboxID,
			innerHTML: "New tab?",
			style: centered,
			id: newTabCheckboxLabelID,
		}
	];
	const redirectButton: Component = [
		"button",
		{
			// className: "ytp-button",
			id: noPLButtonID,
			title: "Watch outside playlist",
			onclick: () =>
			{
				let searchParams = pageUtils.getSearchParams();
				if (pageUtils.queryElement<HTMLInputElement>(`#${newTabCheckboxID}`)?.checked)
					urlUtils.openNewTab(`https://youtube.com/watch?v=${searchParams.v}`);
				else
					urlUtils.setLocationAttribute("search", `?v=${searchParams.v}`);
			},
			innerHTML: "No Playlist",
			style: centered,
		}
	];

	pageUtils.render(
		pageUtils.queryElement(".ytp-right-controls"),
		[
			newTabCheckbox,
			newtabcheckboxLabel,
			redirectButton
		],
		"start"
	);

	return true;
}

export function removeNoPLControls(this: YTUModule)
{
	for (let id of [
		"noPLButtonID",
		"newTabCheckboxID",
		"newTabCheckboxLabelID"
	])
	{
		this.utils.pageUtils.removeElementById(this.getStateValue?.(id, null));
	}

	return false;
}

export function shouldBeActiveFor(this: YTUModule, url?: string | URL | Location): boolean
{
	const TEST_URL = url
		? (typeof url === "string"
			? new URL(url)
			: url
		)
		: this.utils.urlUtils.getCurrentLocation();

	return (
		TEST_URL.pathname === "/watch" &&
		//If the current video is NOT played from a playlist, do nothing.
		!!this.utils.pageUtils.getSearchParams(TEST_URL).list
	);
}