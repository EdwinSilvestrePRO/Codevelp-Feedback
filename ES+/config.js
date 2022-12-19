// importando las dos clases para refrescar la configuración de Codevelp Feedback.
import Register from "./register.js";

import FeedbackImage from "./images.js";

// clase que gestiona la configuracion de la aplicacion principal.
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
    async changeConfigProfileForSave (wConfigData, pedding) {
        let allow = await pedding;
        if(allow) {

            const patternName = /^[a-zA-Z]{3,}\s[a-zA-Z]{3,}(\s[a-zA-Z]{3,})*$/;

            const patternEmail = /^[a-z-A-Z]{1}\w{3,}\@(gmail.com|hotmail.com|codevelp.com)(.[a-z-A-Z]{3,})*$/;

            let media = {
                Iam: wConfigData.querySelector("input#description").value,
                fill: wConfigData.querySelector("input#fill").value,
                stroke: wConfigData.querySelector("input#track").value,
                font: wConfigData.querySelector("select#font-family").value,
                image: wConfigData.querySelector("img#thumbnail-dynamic").dataset.imageactual
            }

            let NAME = wConfigData.querySelector("input#namesForChange");

            let EMAIL = wConfigData.querySelector("input#emailForChange");
            
            if (!patternName.test(NAME.value)) {
                let viewFalse = document.getElementById("viewRunnCongif");
                viewFalse.textContent = "Escribe tu nombre completo por favor";

                viewFalse.classList.add("err");
                viewFalse.classList.add("visible");

                await Register.ActionAsync(1300);

                viewFalse.classList.remove("err");
                viewFalse.classList.remove("visible");

                NAME.classList.add("invalid");
                throw new Error(viewFalse.textContent);
            }
            else NAME.classList.remove("invalid");
            
            if (!patternEmail.test(EMAIL.value)) {
                let viewFalse = document.getElementById("viewRunnCongif");
                viewFalse.textContent = "Escribe bien el correo electronico para remplazar el anterior";

                viewFalse.classList.add("err");
                viewFalse.classList.add("visible");

                await Register.ActionAsync(1300);

                viewFalse.classList.remove("err");
                viewFalse.classList.remove("visible");

                EMAIL.classList.add("invalid");
                throw new Error(viewFalse.textContent);
            }
            else EMAIL.classList.remove("invalid");
            
            const localStorageInternal = JSON.parse( localStorage.getItem("@User") );
            // insertando todas las propiedades de la imagen.
            localStorageInternal.media = media;
            
            // insertando el nombre & email del usuario.
            localStorageInternal.name = NAME.value;
            localStorageInternal.email = EMAIL.value;

            // Insertando fecha de modificacion.
            const date = new Date();

                    let day = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"][date.getDay()],

                    month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Juio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"][date.getMonth()];

                    localStorageInternal.lastModified = `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`,

            localStorage.setItem("@User", JSON.stringify(localStorageInternal));
            let viewSavedConfig = document.getElementById("viewRunnCongif");

            viewSavedConfig.textContent = "Guardando configuracion...";
            viewSavedConfig.classList.add("visible");
            
            await Register.ActionAsync(2000);

            viewSavedConfig.classList.remove("visible");

            return true;
        }
    }
}