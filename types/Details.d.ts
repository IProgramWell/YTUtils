export interface VideoDetails
{
	"videoId": string;
	"title": string;
	"lengthSeconds": string;
	"keywords": string[];
	"channelId": string;
	"isOwnerViewing": boolean;
	"shortDescription": string;
	"isCrawlable": true;
	"thumbnail": {
		"thumbnails": {
			"url": string;
			"width": number;
			"height": number;
		}[]
	};
	"allowRatings": boolean;
	"viewCount": string;
	"author": string;
	"isPrivate": boolean;
	"isUnpluggedCorpus": boolean;
	"isLiveContent": boolean;
}