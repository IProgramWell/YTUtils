export default function noShortsOnURLChange(this: import("../modules/YTUModule").YTUModule)
{
	const [, section, shortsID] = this
		.utils
		.urlUtils
		.getCurrentLocation()
		.pathname
		.split("/");

	if (section === "shorts")
		this.utils.urlUtils.navigate(`https://youtube.com/watch?v=${shortsID}`);
	return true;
};