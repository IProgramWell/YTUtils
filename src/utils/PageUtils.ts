import { arrToObj } from "./ObjUtils";

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