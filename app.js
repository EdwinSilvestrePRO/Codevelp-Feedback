import Register from './ES+/register.js'

class StartFeedback {
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
        const started = new StartFeedback();
        // the request for user...
        let User = localStorage.getItem("@User") !== null;

        started.entrace(User, localStorage.getItem("@User"));
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
                let {name, email} = JSON.parse(localStorage.getItem("@User"));
                console.log(`you start is finished ${name} with email: ${email}`);
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
}

// agregando el evento y el metodo la cual va a llamar...

window
.addEventListener("DOMContentLoaded", StartFeedback.Main, StartFeedback.op);

document
.addEventListener("register", StartFeedback.CallRegister, StartFeedback.op);