import Register from "./register.js";
import FeedbackImage from "./images.js";

export default class AppConfig extends Register {
    constructor(type, dataConfig) {
        super(null);
        this.type = type;
        this.dataConfig = dataConfig;
        this.viewChConfig = document.getElementById("viewRunnCongif");
    }
    async changeTheme () {
        if(this.dataConfig == "light") {
            const user = JSON.parse(localStorage.getItem("@User"));
            
            document.body.classList.remove(this.dataConfig);

            this.type+= this.dataConfig = user.theme = "dark";

            localStorage.setItem("@User", JSON.stringify(user));
            
            document.body.classList.add(this.dataConfig);

        }
        else {
            const user = JSON.parse(localStorage.getItem("@User"));
            
            document.body.classList.remove(this.dataConfig);
            
            this.type+= this.dataConfig = user.theme = "light";
            
            localStorage.setItem("@User", JSON.stringify(user));
            
            document.body.classList.add(this.dataConfig);
        }
        document
        .querySelector("img#iconForApp")
        .src = FeedbackImage.iconURL(true);
        
        this.viewChConfig.textContent = this.type;
        
        this.viewChConfig.classList.add("visible");

        await AppConfig.ActionAsync(1000);

        this.viewChConfig.classList.remove("visible");
    }
}