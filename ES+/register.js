/* La clase Register se encarga de hacer tareas complejas de registro en el navegador
dado que utiliza las apis: localStorage y SessionStorage
esta para que sea Compatible con cualquier navegador.
*/
export default class Register {
    constructor(template) {
        this.template = template;
    }

    postAsync(current) {
        return new Promise(function(res, reject){
            setTimeout(()=> res(current), [1000, 2000, 3000][current]);
        });
    }
    
    static ActionAsync(timeForAll) {

        return new Promise(function(res, reject){
            setTimeout(()=> res(), timeForAll);
        });
    }

    setInterface() {
        const $template = this.template;
        $template.content.querySelector("form[action]").id = "register-now";
        let $node = document.importNode($template.content, true);
        document.body.appendChild($node);
        this
        .postAsync(0)
        .then(val=>{
            const $register = document.getElementById("register-now");
            $register.classList.add("asyncVisible");
            val++;
        })
        .catch(console.warn);
    }
    static async setInformation($register) {
        // nombres y el patron que debe de seguir para que sea válido.
        let name = $register.name, patternName = /^[a-zA-Z]{3,}\s[a-zA-Z]{3,}(\s[a-zA-Z]{3,})*$/, valueName = "";
        
        // email y el patron que debe de seguir para que sea válido.
        let email = $register.email, patternEmail = /^[a-z-A-Z]{1}\w{3,}\@(gmail.com|hotmail.com|codevelp.com)(.[a-z-A-Z]{3,})*$/, valueEmail = "";

        // evaluando el nombre puesto en la interfas.
        if(patternName.test(name.value)) {
            valueName = name.value;
                //evaluando el email puesto en la interfas.
                if(patternEmail.test(email.value)) {

                    const date = new Date();

                    let day = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"][date.getDay()],

                    month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Juio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"][date.getMonth()],

                    shortingDate = `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`,

                    dataToString = (`${day}, ${date.getDate()} de ${month} del año ${date.getFullYear()}`);

                    valueEmail = email.value;

                    $register.sendInformation.classList.remove("notSend");

                    // almacenar los datos de registro selladamente en el almacenamiento local:
                    localStorage.setItem("@User", JSON.stringify({
                        "theme": "light",
                        "name": valueName,
                        "email": valueEmail,
                        // new properties
                        "dateShortRegister": dataToString,
                        "dateShort": shortingDate,
                        "lastModified":"Ninguno"
                    }));
                    await Register.ActionAsync(2000);
                    // fin de registro basico del usuario.
                    window.location.reload();
                }
                else {
                    $register.sendInformation.classList.add("notSend");
                    
                    email.classList.add("invalid");
                    
                    await Register.ActionAsync(3000);
                    
                    email.classList.remove("invalid");
                }
                
            } else {
            $register.sendInformation.classList.add("notSend");
            name.classList.add("invalid");

            await Register.ActionAsync(3000);

            name.classList.remove("invalid");
        }
    }
}

document
.addEventListener("submit", ev=> {
    ev.preventDefault();

    if(ev.target.matches("form#register-now")) {
        Register.setInformation(ev.target);
    } else;
});