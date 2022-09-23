import type { modules } from "userscriptbase";
import type { ComponentTypes } from "userscriptbase/types";

export function addNoPLControls(this: modules.PageModule)
{
	const { urlUtils, pageUtils } = this.utils;
	const NO_PL_CTRL_CONTAINER = pageUtils.queryElement(".ytp-right-controls");
	if (!NO_PL_CTRL_CONTAINER)
		// throw new Error("Can't add controls; container not found!");
		return false;
	const centered = "float: left; top: 50%; white-space: nowrap;";
	const newTabCheckboxID = "ytutils-noplaylist-newtabcheckbox";
	const newTabCheckboxLabelID = "ytutils-noplaylist-newtabcheckbox-label"
	const noPLButtonID = "ytutils-noplaylist-noplbtn";
	this.setStateValue?.("newTabCheckboxID", newTabCheckboxID);
	this.setStateValue?.("noPLButtonID", noPLButtonID);
	this.setStateValue?.("newTabCheckboxLabelID", newTabCheckboxLabelID);

	const newTabCheckbox: ComponentTypes.Component = [
		"input",
		{
			type: "checkbox",
			id: newTabCheckboxID,
			style: `${centered} transform: translateY(50%)`,
			name: newTabCheckboxID,
			title: "Open in new tab",
		},
	];
	const newtabcheckboxLabel: ComponentTypes.Component = [
		"label",
		{
			htmlFor: newTabCheckboxID,
			innerHTML: "New tab?",
			style: centered,
			id: newTabCheckboxLabelID,
		}
	];
	const redirectButton: ComponentTypes.Component = [
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
		NO_PL_CTRL_CONTAINER,
		[
			newTabCheckbox,
			newtabcheckboxLabel,
			redirectButton
		]
			// Browser won't add an element if one already exists w/ the same ID.
			/* .filter((
				[type, attributes]:
					[Component[0], Component[1] & { id?: string }]
			) => !(
				attributes?.id &&
				pageUtils.queryElement(`${type}#${attributes.id}`)
			)) */,
		"start"
	);

	return true;
}

export function removeNoPLControls(this: modules.PageModule)
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

export function shouldBeActiveFor(this: modules.PageModule, url?: string | URL | Location): boolean
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