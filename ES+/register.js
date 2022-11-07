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

            // return  this
            // .postAsync(val);
        })
        .catch(console.warn);
    }
    static async setInformation($register) {
        let name = $register.name, patternName = /^[a-zA-Z]{3,}\s[a-zA-Z]{3,}(\s[a-zA-Z]{3,})*$/, valueName = "";

        let email = $register.email, patternEmail = /^[a-z-A-Z]{1}\w{3,}\@(gmail.com|hotmail.com|codevelp.com)(.[a-z-A-Z]{3,})*$/, valueEmail = "";
        // evaluando el nombre puesto en la interfas.
        if(patternName.test(name.value)) {
            valueName = name.value;
                //evaluando el email puesto en la interfas.
                if(patternEmail.test(email.value)) {
                    valueEmail = email.value;
                    $register.sendInformation.classList.remove("notSend");

                    // almacenar los datos de registro selladamente en el almacenamiento local:
                    localStorage.setItem("@User", JSON.stringify({
                        "theme": "light",
                        "name": valueName,
                        "email": valueEmail
                    }));
                    await Register.ActionAsync(2000);
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