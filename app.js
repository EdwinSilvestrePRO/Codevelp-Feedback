// Las importaciones de las clases en ficheros individuales.
import Register from './ES+/register.js'
import GraphyInterface from './ES+/graphyInterfaceInteractive.js';
import FeedbackImage from './ES+/images.js';
import MenuBar from './ES+/menu.js';
import AppConfig from './ES+/config.js';

// La clase <StartFeedback> es donde comienza todo cuando es invocado por el evento DOMContentLoaded, osea este es el origen.
class StartFeedback {
    // Este es el valor que se gestiona para hacer saber a Feedback si el usuario no ha cerrado sesión.
    #isPresent = ()=> sessionStorage.getItem("@instance");

    canvas = document.querySelector("canvas.loader");

    static op = {
        once : false,
        capture: false
    }
    static CallRegister (ev) {
        const $template = document.getElementById("theRegister");

        const reg = new Register($template);

        reg.setInterface();
    }
    static Main(eventObject) {
        // Peticion del usuario, la llave se llama @User.
        let User = localStorage.getItem("@User");
        if(User) {
            let {theme} = JSON.parse(User);
            document.body.classList.add(theme);

        }
        const started = new StartFeedback();

        started.entrace(User !== null, User);
    }
    loader (context, properties, rectX) {
        // context.beginPath();
        context.strokeStyle = properties.fontColor;
        context.lineWidth = 2;
        context.fillStyle = properties.fontColor;
        context.strokeRect(this.canvas.width/2-100, this.canvas.height/2+60, 200, 30);
        context.fillRect(this.canvas.width/2-100, this.canvas.height/2+60, rectX, 30);
        // console.log(context);

        requestAnimationFrame((handler)=> {
            if(rectX == 200) {
                // ejecutando acciones asincronas...
                Register.ActionAsync(2000)
                .then(()=> {
                    this.canvas.classList.remove("visible");
                    return Register.ActionAsync(1000);
                })
                .then (()=> {
                    document.body.classList.remove("start");
                    document.body.parentElement.removeAttribute("data-start");
                    this.canvas.parentElement.removeChild(this.canvas);

                    document.dispatchEvent(new Event("finishLoader"));
                })
                // debug errors or warns...
                .catch(console.warn);

                return cancelAnimationFrame(handler);
            } else if (rectX == 165 && localStorage.getItem("@User") == null) document.dispatchEvent(new Event("register"));
            else {
                rectX++;
                this.loader(context, properties, rectX);
            }
        });
    }
    entrace(isUser, local) {
        let context = this.canvas.getContext("2d"),
        {width, height} = this.canvas,
        first = "Just in Time",
        last = "FeedBack",
        properties = {
            fontColor: (()=>{
                if(isUser) {
                    let theme = JSON.parse(local).theme;
                    return theme == "light"? "black" : "yellow";
                }
                else return "black";
            })()
        };
        context.font = "bolder 38px monospace";
        context.fillStyle = properties.fontColor;
        let measure = context.measureText(first);
        context.fillText(first, width /2 - measure.width / 2, height/2);
        setTimeout(()=> {
            this.canvas.classList.add("visible");
            
            setTimeout(()=> {
                this.canvas.classList.remove("visible");
                setTimeout(()=> {
                    this.canvas.classList.add("visible");
                    context.clearRect(0, 0, width, height);
                context.font = "bolder 40px cursive";
                measure = context.measureText(last);
                context.fillText(last, width/2 - measure.width/2, height/2);
                context.strokeStyle = properties.fontColor;
                context.lineWidth = 6;
                context.lineCap = "round";
                context.lineJoin = "round";
                context.beginPath();
                context.moveTo(width/2 - measure.width/2, height/2+6);
                context.lineTo(width/2+measure.width/2, height/2+6);
                context.lineTo(width-measure.width, height/2+50);
                context.lineTo(width/2+50, height/2+40);
                context.closePath();
                context.stroke();
                setTimeout(()=> {
                    let rectX = 1;
                    
                    this.loader(context, properties, rectX);
                   

                }, 2000);
                }, 1400);

            }, 1000);
        }, 1500);
    }

    // Hace prueba de que si el usuario esta registrado pues se inicia completamente.
    Authentication (ev) {
        if(this.#isPresent()) {
            document.body.parentElement.removeAttribute("data-start");
            document.body.classList.remove("start");
            let canvas = document.querySelector("canvas.loader");
            if(canvas) canvas.parentElement.removeChild(canvas);

            let user = localStorage.getItem("@User"), className = "light";
            if(user) {
                let {theme} = JSON.parse(user);
                 className = theme;
            }
            else className = className;
            document.body.classList.add(className);
            return document.dispatchEvent(new Event("finishLoader"));
        }
        else StartFeedback.Main(ev);
    }
}

window.handlerFunctions = function(EVENT){
    // Aqui se resuelve el problema de los errores en la consola.
    if(EVENT.target == (document.body.parentElement)) return;
    else;

    if(EVENT.target.matches("div.trackButton #collapse-menu") || EVENT.target.matches("div.trackExit #collapse")) {
        let Actions = new MenuBar(document.getElementById("central-panel"), document.getElementById("allContent"), document.getElementById("articleContent"));

        if(Actions.articleContent.dataset.active === "true") Actions.open(Actions.articleContent);
        else Actions.close(Actions.articleContent);
    }
    else if (EVENT.target.parentElement.matches("div.theme#theme")) {
        let chTheme = new AppConfig("change theme for app: ", JSON.parse(localStorage.getItem("@User")).theme);
        chTheme.changeTheme(); // url for iconInterface or void.
    }

    else if (EVENT.target.parentElement.matches("ol#options")) {
        if(!("href" in EVENT.target)) {
            let chOp = new MenuBar(document.getElementById("central-panel"), document.getElementById("allContent"), document.getElementById("articleContent"));
            chOp.selectOption(EVENT.target, EVENT.target.parentElement.querySelector("li.actual"));

            chOp.close(chOp.articleContent);

        }
    }
    else if(EVENT.target.matches("#iconForApp")) {
        const HandlerWindowProfile = new GraphyInterface(),
        image = new FeedbackImage();

        let userMedia = image.userThumbnails(localStorage.getItem("@User"), false);

        HandlerWindowProfile
        .handlerWindowProfile(EVENT.target, userMedia, document.getElementById("articleContent"));
    }
    else if(EVENT.target.matches("#exit-toolAccount") || EVENT.target.matches("#exit-toolAccount path")) {
        const HandlerWindowProfile = new GraphyInterface(),
        image = new FeedbackImage();
        
        let userMedia = image.userThumbnails(localStorage.getItem("@User"), false);
        
        HandlerWindowProfile
        .handlerWindowProfile(document.getElementById("iconForApp"), userMedia, document.getElementById("articleContent"));
    }
    else if(EVENT.target.matches("#toolAccount-now") || EVENT.target.matches("#toolAccount-now path")) {
        const HandlerWindowProfile = new GraphyInterface(),
        image = new FeedbackImage();
        
        let userMedia = image.userThumbnails(localStorage.getItem("@User"), false);
        
        HandlerWindowProfile
        .handlerWindowProfile(document.getElementById("iconForApp"), userMedia, document.getElementById("articleContent"));
        // // view instance Account
        const $account = document.getElementById("optionAccount");
        $account.click();
    }
    else if (EVENT.target.matches("svg#accessConfigProfile") || EVENT.target.matches("svg#accessConfigProfile path")) {
        // config profile: change name, change email or change thumbnails and data.
        const InterfaceForConfig = new GraphyInterface(),
        nodesHidden = document.getElementById("configAccount");

        InterfaceForConfig
        .interfaceForConfigProfile(nodesHidden, EVENT.target);
    }
    else if (EVENT.target.matches("svg#discard-config") || EVENT.target.matches("svg#discard-config path")) {
        // config profile: change name, change email or change thumbnails and data.
        const InterfaceForConfig = new GraphyInterface(),
        nodesHidden = null;
        
        
        InterfaceForConfig
        .interfaceForConfigProfile(nodesHidden, EVENT.target);

        const viewExit = document.getElementById("viewRunnCongif"),
        mess = ("Descartando configuraion");

        viewExit.textContent = mess;

        viewExit.classList.add("warn");
        viewExit.classList.add("visible");

        setTimeout(()=> {
            viewExit.classList.remove("warn");
            viewExit.classList.remove("visible");
        }, 1200);
    }
    else if (EVENT.target.matches("svg#save-change") || EVENT.target.matches("svg#save-change path")) {
        // config profile: change name, change email or change thumbnails and data.
        const InterfaceForConfig = new GraphyInterface(),
        nodesHidden = null,
        $divConfig = document.querySelector("div.wconfigAccount"),
        configProfile = new AppConfig("Guardando configuracion del perfil de usuario");

        configProfile.changeConfigProfileForSave($divConfig, InterfaceForConfig.handlePropertiesForUser())
        .then (data => {

            const $account = document.getElementById("optionAccount");
            $account.click();
            
            if(data)
            InterfaceForConfig
            .interfaceForConfigProfile(nodesHidden, EVENT.target);
            
        })
        .catch(warn => (warn));
        
    }
    else if (EVENT.target.matches("div.theAssemblage-thumbnails svg.left") || EVENT.target.matches("div.theAssemblage-thumbnails svg.left path")) {
        // evitando la seleccion de los elementos
        window.getSelection()?.removeAllRanges();
        // Cambiar avatar en el boton izquierdo
        const chThumbnails = new GraphyInterface();
        chThumbnails
        .changeThumbnails("left");
    }
    else if (EVENT.target.matches("div.theAssemblage-thumbnails svg.right") || EVENT.target.matches("div.theAssemblage-thumbnails svg.right path")) {
        // evitando la seleccion de los elementos
        window.getSelection()?.removeAllRanges();
        
        // Cambiar avatar en el boton derecho.
        const chThumbnails = new GraphyInterface();
        chThumbnails
        .changeThumbnails("right");
    }
    else if (EVENT.target.matches("svg.collapce-allImages") || EVENT.target.matches("svg.collapce-allImages path")) {
        const PresentImages = new GraphyInterface(),
        $elementOfImages = document.getElementById("ACCOUNT")
        .content
        .querySelector("template#allThumbnails-of-user");
        
        PresentImages.setAllImages($elementOfImages, document.body, document.body.querySelector("img#thumbnail-dynamic"));
    }
    else if (EVENT.target.matches("div.controls-management2 svg#discard-imageSelected") || EVENT.target.matches("div.controls-management2 svg#discard-imageSelected path")) {
        const PresentImages = new GraphyInterface(),
        $elementOfImages = document.body.querySelector("div#image-selection-option");
        if($elementOfImages)        
        PresentImages.clearAllImages($elementOfImages, document.body);
    }
    else if (EVENT.target.matches("div.controls-management2 svg#saved-imageSelected") || EVENT.target.matches("div.controls-management2 svg#saved-imageSelected path")) {
        const setImageSelected = new GraphyInterface(),
        theImages = document.body.querySelector("div#image-selection-option");
        let $inputs = Array.from( theImages.querySelectorAll("input") );
        
        let imageSelected = $inputs.find((el)=> el.checked == true);
        
        setImageSelected
        
        .changeThumbnails("set-url", imageSelected)
        
        .then(()=> {
            const PresentImages = new GraphyInterface(),
            $elementOfImages = document.body.querySelector("div#image-selection-option");
            if($elementOfImages)        
            PresentImages.clearAllImages($elementOfImages, document.body);
        })
        .catch (t=> (t));
    }
}

// agregando el evento y el metodo la cual va a llamar...

// Haciendo incercion de la imagen para la aplicacion, es el icono de acceso directo.
window
.addEventListener("DOMContentLoaded", FeedbackImage.setIcon);

// Es donde ya utiliza la clase <StartFeedback> que es el origen.
window
.addEventListener("DOMContentLoaded", function(){ 
    return new StartFeedback().Authentication();
}, StartFeedback.op);

// Este evento es invocado si el usuario no esta registrado.
document
.addEventListener("register", StartFeedback.CallRegister, StartFeedback.op);

// Este es el gestor principal del evento click en la aplicacion.
document.addEventListener("click", window.handlerFunctions);

// Gestor principal del evento input.
document.addEventListener("input", (EVENT)=> {
     // Aqui se resuelve el problema de los errores en la consola.
     if(EVENT.target == (document.body.parentElement)) return;
     else;

    if (EVENT.target.matches("input#description") || EVENT.target.matches("input#fill") || EVENT.target.matches("input#track") || EVENT.target.matches("select#font-family")) {
        const refresh = new GraphyInterface();
        refresh.handlePropertiesForUser();
    }
    else if (EVENT.target.matches("input#namesForChange")) {
        const patternName = /^[a-zA-Z]{3,}\s[a-zA-Z]{3,}(\s[a-zA-Z]{3,})*$/;

        if (!patternName.test(EVENT.target.value)) EVENT.target.classList.add("invalid");
        else EVENT.target.classList.remove("invalid");

    }
    else if (EVENT.target.matches("input#emailForChange")) {
        const patternEmail = /^[a-z-A-Z]{1}\w{3,}\@(gmail.com|hotmail.com|codevelp.com)(.[a-z-A-Z]{3,})*$/;
        
        if (!patternEmail.test(EVENT.target.value)) EVENT.target.classList.add("invalid");
        else EVENT.target.classList.remove("invalid");

    }
});