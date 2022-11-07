import Register from "./register.js";
export default class FeedbackImage extends Register {
    //logo for application FeedBack.
    static logoURL = function(){
        const $canvas = document.createElement("canvas");
        $canvas.width = 300;
        $canvas.height = 290;

        const {width, height} = $canvas,
        last = "FeedBack";
            let context = $canvas.getContext("2d");

                context.clearRect(0, 0, width, height);
                context.fillStyle = "yellow";
                context.fillRect(0, 0, width, height);
                
                context.fillStyle = "black";
                context.font = "bolder 40px cursive";
                let measure = context.measureText(last);
                context.fillText(last, width/2 - measure.width/2, height/2);
                context.strokeStyle = "black";
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
                
                return $canvas.toDataURL("png", 1);
    }();

    // icon for application FeedBack.
    static iconURL = function(){
        const $canvas = document.createElement("canvas");
        $canvas.width = 100;
        $canvas.height = 60;
        let context = $canvas.getContext('2d');
        context.strokeStyle = "black";
        context.fillStyle = "transparent";
        context.lineCap = "round";
        context.lineJoin= "round";
        context.lineWidth = 4;
        context.beginPath();
        context.moveTo(4, 4);
        context.lineTo(96, 10);
        context.lineTo(16, 56);
        context.lineTo(16, 56);
        context.lineTo(80, 46);
        context.closePath();
        context.stroke();

        return $canvas.toDataURL("png");
    }();
    static async setIcon() {
        const $linkIcon = document.getElementById("iconApp");
        $linkIcon.href = FeedbackImage.iconURL;
        
        await FeedbackImage.ActionAsync(2000);
        document.title = "FeedBack";
    }
}
