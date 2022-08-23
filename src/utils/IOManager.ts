import { AutoBound } from "./ObjUtils";

export default class IOManager extends AutoBound
{
	scriptName: string;
	logTimestamp: boolean;
	timestampFormat: "ISO" | "UTC" | "Locale" | "Milliseconds" | "Human";

	/**
	 * @param {string} name
	 * @param {boolean} logTimestamp
	 * @param {typeof IOManager.prototype.timestampFormat} timestampFormat
	 */
	constructor (
		name: string,
		logTimestamp: boolean = true,
		timestampFormat: typeof IOManager.prototype.timestampFormat = "Locale"
	)
	{
		super();

		this.scriptName = name;
		this.logTimestamp = logTimestamp;
		this.timestampFormat = timestampFormat;
	}

	getTimestamp(): string
	{
		switch (this.timestampFormat)
		{
			case "UTC":
				return new Date().toUTCString();
			case "ISO":
				return new Date().toISOString();
			case "Locale":
				return new Date().toLocaleString();
			case "Milliseconds":
				return new Date().getTime().toString();
			case "Human":
			default:
				return new Date().toString();
		}
	}

	joinPrefixes(prefixList: string[], addSpace: boolean = false): string
	{
		return prefixList
			.map(prfx => `[${prfx}]`)
			.join(" ") +
			":" +
			(addSpace
				? " "
				: ""
			);
	}

	getPrefix(includeTimestamp: boolean = false, addSpace: boolean = false): string
	{
		return this.joinPrefixes(
			[
				...(includeTimestamp
					? [this.getTimestamp()]
					: []
				),
				this.scriptName,
			],
			addSpace
		);
	}

	print(...messages: (string | any)[])
	{
		console.log(
			this.getPrefix(
				this.logTimestamp,
				false
			),
			...messages
		);
	}

	prompt(message: string, defaultText: string, includeTimestamp: boolean = false): string
	{
		return globalThis.prompt(
			this.getPrefix(
				includeTimestamp,
				true
			) +
			message,
			defaultText
		);
	}

	alert(message: string, includeTimestamp: boolean = false)
	{
		globalThis.alert(
			this.getPrefix(
				includeTimestamp,
				true
			) +
			message
		);
	}
}