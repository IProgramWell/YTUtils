export default function noShortsOnURLChange()
{
	const [, section, shortsID] = document.location.pathname.split("/");
	if (section === "shorts")
		document.location.href = `https://youtube.com/watch?v=${shortsID}`;
	return true;
};