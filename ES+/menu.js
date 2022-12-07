// importando la clase GraphyInterface.
import GraphyInterface from './graphyInterfaceInteractive.js';

// MenuBar es la clase que administra las seleciones del usuario y es por eso que hereda de GraphyInterface.
export default class MenuBar extends GraphyInterface {
	constructor(section, $main, articleContent) {
	super();
	this.section = section;
	this.$main = $main;
	this.articleContent = articleContent;
	}
	// metodos principales de apertura y cierre.
	open(presentContent) {
		let {section} = this;
		section.classList.remove("hidden");
		presentContent.classList.add("blur");
		presentContent.dataset.active = "false";
	}
	close (presentContent) {
		let {section} = this;
		section.classList.add("hidden");
		presentContent.classList.remove("blur");
		presentContent.dataset.active = "true";
	}
	selectOption(element, elementActual) {
		let textUPC = element.textContent.toUpperCase();
		
		const boxContent = this.$main.querySelector("#boxContent"),
		$descriptiveBar = this.$main.querySelector("#descriptive-bar h2"),
		$selectTemp = document.getElementById(textUPC);
		// stop...
		window.cancelAnimationFrame(MenuBar.animActual);
		clearInterval(MenuBar.intervalForDate);

		// view change
		elementActual.classList.remove("actual");

		element.classList.add("actual");
		
		// clear boxContent and title for descriptive bar.
		boxContent.innerHTML = "";

		$descriptiveBar.textContent = element.textContent;

		return this.MainProttected(textUPC, boxContent, $selectTemp);
	}
}
