export interface IYTCustomEvent<T = any> extends Event
{
	detail: {
		pageData: {
			endpoint: {
				browserEndpoint: {
					browserId: string;
				};
				clickTrackingParams: string;
				commandMetadata: {
					webCommandMetadata: {
						apiUrl: string;
						rootVe: number;
						webPageType: string;
					}
				}
			};
			page: string;
			response: T;
			rootVe: number;
			url: string;
		}
	}
}
export interface IYTPlayerEvent extends IYTCustomEvent
{
	// TODO: Finish typedef
	detail: IYTCustomEvent["detail"] & {
		pageData: IYTCustomEvent["detail"]["pageData"] & {
			playerResponse: {
				videoDetails: {
					videoId: string;
					title: string;
					lengthSeconds: number;
					keywords: string[];
					channelId: string;
					isOwnerViewing: false;
					shortDescription: string;
					isCrawlable: boolean;
					thumbnail: {
						thumbnails: {
							url: string;
							width: 168;
							height: 94
						}[]
					};
					allowRatings: boolean;
					viewCount: number;
					author: string;
					isPrivate: boolean;
					isUnpluggedCorpus: boolean;
					isLiveContent: boolean;
				};
			};
		};
	};
}