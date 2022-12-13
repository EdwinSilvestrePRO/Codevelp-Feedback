// Tambien utilizando la clase FeedbackImage.
import FeedbackImage from "./images.js";

// Clase que representa la interfaz de usuario.
export default class GraphyInterface {
    // propiedades státicas necesarias...
    static Diapositiva = new GraphyInterface();
    static animActual = 0;
    static intervalForDate = 0;
    static rotationMain = 0;
    static ActionAsync(timeForAll) {

        return new Promise(function(res, reject){
            setTimeout(()=> res(), timeForAll);
        });
    }

    viewDate () {
        const $initialDate = document.getElementById("date-normal"),
        date = new Date();
        let day = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"][date.getDay()],
        month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Juio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"][date.getMonth()],
        dataToString = (`Hoy es ${day}, ${date.getDate()} de ${month} del año ${date.getFullYear()}.`);
        $initialDate.textContent = dataToString;
    }
    static Main() {
        sessionStorage.setItem("@instance", "presente")
        const $templateForApp = document.getElementById("interfaceForApp");
        $templateForApp.content
        .querySelector("header")
        .classList.add("appName");
        $templateForApp.content
        .querySelector("img#iconForApp")
        .src = FeedbackImage.iconURL(true);
        /* definir el cargador predeterminado de la plicacion o la que halla elegido ya el usuario. */

        let $nodes = document.importNode($templateForApp.content, true);
        document.body.appendChild($nodes);

        GraphyInterface
        .Diapositiva
        .AnimDiapositive()
        .viewDate();

        
        GraphyInterface.intervalForDate = setInterval(GraphyInterface.Diapositiva.viewDate, 1000*60*60);
    }
    MainProttected (descriptive, boxContent, templateForSet) {
        if(descriptive == "EXIT") {
            let countBack = 3;
         boxContent.innerHTML = `<p>Close session in ${countBack}</p>`;
         let controlBack = setInterval(()=> {
             countBack--;
             boxContent.innerHTML = `<p>Close session in ${countBack}</p>`;
            if(countBack <= 0) {
                clearInterval(controlBack);
                window.close();
             }
         }, 1000);
         document.removeEventListener("click", window.handlerFunctions);
        }
        else if(descriptive == "HOME") {
            let {content} = templateForSet,
            
            mainNode = document.importNode(content, true);
            
            boxContent.appendChild(mainNode);
            
            GraphyInterface
            .Diapositiva
            .AnimDiapositive()
            .viewDate();
            
            GraphyInterface.intervalForDate = setInterval(GraphyInterface.Diapositiva.viewDate, 1000*60*60);
            
        }
        else if (descriptive == "LEARN") {
            let {content} = templateForSet,
            
            mainNode = document.importNode(content, true);
            
            boxContent.appendChild(mainNode);
            
        }
        else if (descriptive == "ACCOUNT") {
            let {content} = templateForSet,
            
            mainNode = document.importNode(content, true);
            
            boxContent.appendChild(mainNode);
            
        }
        else if (descriptive == "SETTING") {
            let {content} = templateForSet,
            
            mainNode = document.importNode(content, true);
            
            boxContent.appendChild(mainNode);
            
        }

        else if (descriptive == "ABOUT") {
            let {content} = templateForSet,
            
            mainNode = document.importNode(content, true);
            
            boxContent.appendChild(mainNode);
            
        }
    }
    // amimacion del relog analógico o digital.
    AnimDiapositive() {
        const $diapositive = document.getElementById("view-op"),
        {width, height} = $diapositive, 
        ActualTimes = new Date(),
        {isAnalogic} = JSON.parse(localStorage.getItem("@User"));
        let ctxGraphy = $diapositive.getContext("2d");
        ctxGraphy.fillStyle = `rgb(0, 0, ${ActualTimes.getSeconds()/60 * 255})`;
        ctxGraphy.lineWidth = 6;
        ctxGraphy.strokeStyle = `rgb(${ActualTimes.getMilliseconds()/1000 * 255}, 255, 255)`;;
        ctxGraphy.fillRect(0, 0, width, height);
        ctxGraphy.strokeRect(4, 4, width-8, height-8);

        if(isAnalogic) {

            // the body for clock
            ctxGraphy.strokeStyle = "white";
            ctxGraphy.beginPath();
            ctxGraphy.moveTo(width/2+90, height/2);
            ctxGraphy.arc(width/2, height/2, 90, 0, Math.PI*2, true);
            ctxGraphy.closePath();
            ctxGraphy.stroke();
            // the context for seconds
            ctxGraphy.save();
            ctxGraphy.strokeStyle = "white";
            ctxGraphy.lineWidth = 6;
            ctxGraphy.lineCap = "round";
            ctxGraphy.lineJoin = "round";
            ctxGraphy.beginPath();
            ctxGraphy.translate(width/2, height/2);
            ctxGraphy.rotate(Math.PI/180*(ActualTimes.getSeconds()/60 * 360));
            ctxGraphy.translate(-width/2, -height/2);
            ctxGraphy.moveTo(width/2, height/2);
            ctxGraphy.lineTo(width/2, height/2-80);
            ctxGraphy.stroke();
            ctxGraphy.closePath();
            ctxGraphy.restore();
    
            // the context for hours
            let hour = (ActualTimes.getHours() > 12? ActualTimes.getHours()-12 : ActualTimes.getHours());
            ctxGraphy.save();
            ctxGraphy.strokeStyle = "white";
            ctxGraphy.lineWidth = 6;
            ctxGraphy.lineCap = "round";
            ctxGraphy.lineJoin = "round";
            ctxGraphy.beginPath();
            ctxGraphy.translate(width/2, height/2);
            ctxGraphy.rotate(Math.PI/180*(hour/12*360));
            ctxGraphy.translate(-width/2, -height/2);
            ctxGraphy.moveTo(width/2, height/2);
            ctxGraphy.lineTo(width/2, height/2-55);
            ctxGraphy.stroke();
            ctxGraphy.closePath();
            ctxGraphy.restore();
        } else {
            let hourFormat24 = ActualTimes.getHours(),
            hour = hourFormat24 > 12? hourFormat24-12 : hourFormat24,
            tm = hourFormat24 >= 12? "PM" : "AM";

           
            ctxGraphy.save();

            ctxGraphy.strokeStyle = "white";
            ctxGraphy.beginPath();
            ctxGraphy.translate(width/2, height/2);
            ctxGraphy.rotate(Math.PI/180*GraphyInterface.rotationMain);
            if(GraphyInterface.rotationMain < 361) GraphyInterface.rotationMain+=1;
            else GraphyInterface.rotationMain = 0;
            ctxGraphy.translate(-width/2, -height/2);
            ctxGraphy.moveTo(width/2+80, height/2);
            ctxGraphy.arc(width/2, height/2, 80, Math.PI/180*0, Math.PI+(Math.PI/180*90), true);
            ctxGraphy.moveTo(width/2, height/2+80);
            ctxGraphy.arc(width/2, height/2, 80, Math.PI/180*90, Math.PI, false);
            ctxGraphy.moveTo(width/2 - 80, height/2);
            ctxGraphy.closePath();
            ctxGraphy.stroke();
            ctxGraphy.restore();
            ctxGraphy.font = "bold 25px monospace";
            ctxGraphy.fillStyle = "white";
            let measure = ctxGraphy.measureText(`${hour}:${ActualTimes.getMinutes()}:${ActualTimes.getSeconds()}`);
            ctxGraphy.fillText(`${hour}:${ActualTimes.getMinutes()}:${ActualTimes.getSeconds()}`, width/2 - measure.width/2, height/2);
            ctxGraphy.font = "lighter 20px monospace";
            measure = ctxGraphy.measureText(tm);
            ctxGraphy.fillText(tm, width/2 - measure.width/2, height/2+40);


        }
        GraphyInterface.animActual = window
        .requestAnimationFrame(
            GraphyInterface
            .Diapositiva
            .AnimDiapositive
        );
        return  GraphyInterface.Diapositiva;
    }
    // Control de la ventana del perfil...
    async handlerWindowProfile (target, media, $articleContent) {
        let isViewProfile = target.dataset.viewprofile == "true";
        
        if(isViewProfile) {
            let $m = document.getElementById("central-panel");
            if((/hidden/i).test($m.className))
            $articleContent.classList.remove("blur");

            let $onProfile = document.body.querySelector("div#profileUser");
            $onProfile.classList.remove("visible");
            // end action
            target.dataset.viewprofile = "false";

            await GraphyInterface.ActionAsync(10);

            $onProfile.parentElement.removeChild($onProfile);
        } 
        else {
            $articleContent.classList.add("blur");
            // obtener plantilla
            const $profile = document.getElementById("@PROFILE"),
            {content} = $profile,
            // obtener datos
            {name, email} = JSON.parse(localStorage.getItem("@User"));
            // aplicar las configuraciones.
            content.querySelector("img#thumbnail-user")
            .setAttribute("src", media.url);

            content.querySelector("figcaption#name-user")
            .textContent = name;

            content.querySelector("div.email")
            .textContent = email;

            let $nodes = document.importNode(content, true);

            document.body.appendChild($nodes);
            // end Action
            target.dataset.viewprofile = "true";

            await GraphyInterface.ActionAsync(10);

            let $onProfile = document.body.querySelector("div#profileUser");
            $onProfile.classList.add("visible");
        }
    }
}
document
.addEventListener("finishLoader", GraphyInterface.Main);