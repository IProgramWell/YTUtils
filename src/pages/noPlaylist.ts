import { getSearchParams, removeElementById } from "../utils/PageUtils";
import YTUModule from "../modules/YTUModule";

export function addNoPLControls(this: YTUModule)
{
	//If the current video is NOT played from a playlist, do nothing.
	if (!getSearchParams().list)
		return false;
	const centered = "float: left; top: 50%; white-space: nowrap;";
	const newTabCheckboxID = "ytutils-noplaylist-newtabcheckbox";
	const noPLButtonID = "yt-utils-noplaylist-noplbtn";
	this.setStateValue?.("newTabCheckboxID", newTabCheckboxID);
	this.setStateValue?.("noPLButtonID", noPLButtonID);

	const newTabCheckbox = Object.assign(
		document.createElement("input"),
		{
			type: "checkbox",
			id: newTabCheckboxID,
			style: `${centered} transform: translateY(50%);`,
			name: newTabCheckboxID,
			title: "Open in new tab",
			"aria-label": "Open in new tab",
		}
	);
	/* const newtabcheckboxLabel = Object.assign(
		document.createElement("label"),
		{
			for: newTabCheckboxID,
			innerHTML: "New tab?"
		}
	); */
	const redirectButton = Object.assign(
		document.createElement("button"),
		{
			// className: "ytp-button",
			id: noPLButtonID,
			title: "Watch outside playlist",
			"aria-label": "Watch outside playlist",
			onclick: () =>
			{
				let searchParams = getSearchParams();
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
	);
	document
		.querySelector(".ytp-right-controls")
		?.prepend(
			newTabCheckbox,
			// newtabcheckboxLabel,
			redirectButton,
		);

	return true;
}

export function removeNoPLControls(this: YTUModule)
{
	removeElementById(this.getStateValue?.("newTabCheckboxID", null));
	removeElementById(this.getStateValue?.("noPLButtonID", null));

	return false;
}