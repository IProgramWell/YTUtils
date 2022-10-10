export default function noShortsOnURLChange(this: import("userscriptbase").modules.PageModule)
{
	const [_, section, shortsID] = this
		.utils
		.urlUtils
		.getCurrentLocation()
		.pathname
		.split("/");

	if (section === "shorts")
		this.utils.urlUtils.navigate(`https://youtube.com/watch?v=${shortsID}`);
	return true;
};