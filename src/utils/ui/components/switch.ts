// TODO: Fix CSS
export default function ToggleSwitch(): HTMLElement
{
	const elem: HTMLLabelElement = Object.assign(
		document.createElement("label"),
		{ className: "ytutils-toggle-switch", }
	);
	const checkbox: HTMLInputElement = Object.assign(
		document.createElement("input"),
		{ type: "checkbox", }
	);
	checkbox.addEventListener(
		"change",
		function (event)
		{
			if (
				this?.checked ??
				(event.target as HTMLInputElement).checked ??
				checkbox.checked
			)
			{
				elem.classList.add("ytutils-toggle-active");
			}
			else
			{
				elem.classList.remove("ytutils-toggle-active");
			}
		}
	);
	elem.appendChild(checkbox);
	return elem;
}