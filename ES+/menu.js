import GraphyInterface from './graphyInterfaceInteractive.js';
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
}
