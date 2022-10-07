import type { modules } from "userscriptbase";

const IDS = {
	newTabCheckboxID: "ytutils-noplaylist-newtabcheckbox",
	newTabCheckboxLabelID: "ytutils-noplaylist-newtabcheckbox-label",
	noPLButtonID: "ytutils-noplaylist-noplbtn",
};

export function addNoPLControls(this: modules.PageModule)
{
	const { urlUtils, pageUtils } = this.utils;
	const NO_PL_CTRL_CONTAINER = pageUtils.queryElement(".ytp-right-controls");
	if (!NO_PL_CTRL_CONTAINER)
		return false;
	const centered = "float: left; top: 50%; white-space: nowrap;";

	const newTabCheckbox = pageUtils.createElement(
		"input",
		{
			type: "checkbox",
			id: IDS.newTabCheckboxID,
			style: `${centered} transform: translateY(50%)`,
			name: IDS.newTabCheckboxID,
			title: "Open in new tab",
		}
	);
	const newtabcheckboxLabel = pageUtils.createElement(
		"label",
		{
			htmlFor: IDS.newTabCheckboxID,
			innerHTML: "New tab?",
			style: centered,
			id: IDS.newTabCheckboxLabelID,
		}
	);
	const redirectButton = pageUtils.createElement(
		"button",
		{
			// className: "ytp-button",
			id: IDS.noPLButtonID,
			title: "Watch outside playlist",
			onclick()
			{
				let searchParams = pageUtils.getSearchParams();
				if (pageUtils.queryElement<HTMLInputElement>(`#${IDS.newTabCheckboxID}`)?.checked)
					urlUtils.openNewTab(`https://youtube.com/watch?v=${searchParams.v}`);
				else
					urlUtils.setLocationAttribute("search", `?v=${searchParams.v}`);
			},
			innerHTML: "No Playlist",
			style: centered,
		}
	);

	NO_PL_CTRL_CONTAINER.prepend(
		newTabCheckbox,
		newtabcheckboxLabel,
		redirectButton
	);

	return true;
}

export function removeNoPLControls(this: modules.PageModule)
{
	for (let id of Object.values(IDS))
		this.utils.pageUtils.removeElementById(id);

	return false;
}

export function shouldBeActiveFor(this: modules.PageModule, url?: string | URL | Location): boolean
{
	const URL_TO_CHECK = url
		? (typeof url === "string"
			? new URL(url)
			: url
		)
		: this.utils.urlUtils.getCurrentLocation();

	return (
		/\/watch\/?/i.test(URL_TO_CHECK.pathname) &&
		//If the current video is NOT played from a playlist, do nothing.
		!!this.utils.pageUtils.getSearchParams(URL_TO_CHECK).list
	);
}