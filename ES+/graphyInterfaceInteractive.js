import FeedbackImage from "./images.js";
export default class GraphyInterface {
    static Main() {
        const $templateForApp = document.getElementById("interfaceForApp");
        $templateForApp.content
        .querySelector("header")
        .classList.add("appName");
        $templateForApp.content
        .querySelector("img#iconForApp")
        .src = FeedbackImage.iconURL;

        let $nodes = document.importNode($templateForApp.content, true);
        console.log($nodes);
        document.body.appendChild($nodes);

        
    }
}
document
.addEventListener("finishLoader", GraphyInterface.Main);