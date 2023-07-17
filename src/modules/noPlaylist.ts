import { ModuleUtils } from "userscriptbase/modules";

import type { PageModule } from "userscriptbase/modules";

const IDS = {
	newTabCheckboxID: "ytutils-noplaylist-newtabcheckbox",
	newTabCheckboxLabelID: "ytutils-noplaylist-newtabcheckbox-label",
	noPLButtonID: "ytutils-noplaylist-noplbtn",
};

export function addNoPLControls(this: PageModule): boolean
{
	const { urlUtils, pageUtils } = this.utils;
	const NO_PL_CTRL_CONTAINER: HTMLElement = pageUtils.queryElement(".ytp-right-controls");
	if (!NO_PL_CTRL_CONTAINER)
		return false;

	const newTabCheckbox: HTMLInputElement = pageUtils.createElement(
		"input",
		{
			type: "checkbox",
			id: IDS.newTabCheckboxID,
			style: "transform: translateY(50%)",
			className: "ytutils-no-pl-btn",
			name: IDS.newTabCheckboxID,
			title: "Open in new tab",
			checked: true,
		}
	);
	const newTabCheckboxLabel: HTMLLabelElement = pageUtils.createElement(
		"label",
		{
			htmlFor: IDS.newTabCheckboxID,
			innerHTML: "New tab?",
			className: "ytutils-no-pl-btn",
			id: IDS.newTabCheckboxLabelID,
		}
	);
	const redirectButton: HTMLButtonElement = pageUtils.createElement(
		"button",
		{
			// className: "ytp-button",
			id: IDS.noPLButtonID,
			title: "Watch outside playlist",
			onclick(): void
			{
				let searchParams = pageUtils.getSearchParams();
				if (pageUtils.queryElement<HTMLInputElement>(`#${IDS.newTabCheckboxID}`)?.checked)
					urlUtils.openNewTab(`https://youtube.com/watch?v=${searchParams.get("v")}`);
				else
					urlUtils.setLocationAttribute("search", `?v=${searchParams.get("v")}`);
			},
			innerHTML: "No Playlist",
			className: "ytutils-no-pl-btn",
		}
	);

	NO_PL_CTRL_CONTAINER.prepend(
		newTabCheckbox,
		newTabCheckboxLabel,
		redirectButton
	);

	return true;
}

export function removeNoPLControls(this: PageModule): boolean
{
	for (let id of Object.values(IDS))
		this.utils.pageUtils.removeElementById(id);

	return false;
}

const regexpActivation = ModuleUtils.activateForRegex(/\/watch\/?/i);
export function shouldBeActiveFor(this: PageModule, url?: string | URL | Location): boolean
{
	const URL_TO_CHECK = url
		? (typeof url === "string"
			? new URL(url)
			: url
		)
		: this.utils.urlUtils.getCurrentLocation();

	return (
		regexpActivation.call(this, URL_TO_CHECK) &&
		//If the current video is NOT played from a playlist, do nothing.
		!!this.utils.pageUtils.getSearchParams(URL_TO_CHECK).get("list")
	);
}