import { PageUtils } from "../utils/index";

import type YTUModule from "../modules/YTUModule";
import type { Component } from "../../types/Component";

export function addNoPLControls(this: YTUModule)
{
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
				let searchParams = PageUtils.getSearchParams();
				if ((document.getElementById(newTabCheckboxID) as HTMLInputElement)?.checked)
					if (globalThis.GM_openInTab)
						GM_openInTab(`https://youtube.com/watch?v=${searchParams.v}`)
					else
						globalThis.open(`https://youtube.com/watch?v=${searchParams.v}`, "_blank")
				else
					document.location.search = `?v=${searchParams.v}`
			},
			innerHTML: "No Playlist",
			style: centered,
		}
	];

	PageUtils.render(
		document.querySelector(".ytp-right-controls"),
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
		PageUtils.removeElementById(this.getStateValue?.(id, null));
	}

	return false;
}

export function shouldBeActiveFor(this: YTUModule, url: string | URL | Location): boolean
{
	const TEST_URL = typeof url === "string"
		? new URL(url)
		: url;

	return (
		TEST_URL.pathname === "/watch" &&
		//If the current video is NOT played from a playlist, do nothing.
		!!PageUtils.getSearchParams(TEST_URL).list
	);
}