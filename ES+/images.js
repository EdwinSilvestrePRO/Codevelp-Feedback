// Importacion de la clase Register.
import Register from "./register.js";

// La clase FeedbackImage que hereda de Register. Esta clase Contiene todas las imagenes de la aplicacion feedback
// creadas con la API de canvas y usando la URL.
export default class FeedbackImage extends Register {
    constructor($canvas = document.createElement("canvas")) {
        // llamando el constructor de la clase Register.
        super(null);
        this.$canvas = $canvas;
    }

    // list images:
    ImageOne (Iam = null, fill = null, stroke = null, font = null) {
        const {$canvas} = this;
        // description for user.
        $canvas.dataset.Iam = Iam !== null? Iam : "Student";
        // fill of user
        $canvas.dataset.fill = fill !== null? fill : "white";
        // stroke of user
        $canvas.dataset.stroke = stroke !== null? stroke : "black";
        // font family for user
        $canvas.dataset.font = font !== null? font : "normal";

        let context = undefined;
        $canvas.width = 274;
        $canvas.height = 235;
        let {width, height, dataset} = $canvas,
        err = null;
        
        context = $canvas.getContext("2d");
        context.fillStyle = dataset.fill;
        context.fillRect(0, 0, width, height);

        context.fillStyle = context.strokeStyle = dataset.stroke;
        context.font = `bolder 25px ${dataset.font}`;

        let measure = context.measureText(dataset.Iam);
        if(measure.width > width) {
            dataset.Iam = "Student";
            measure = context.measureText(dataset.Iam);
            err = "la descripcion es muy larga";
        } else err = null;
        context.fillText(dataset.Iam, width/2 - measure.width /2, 180);

        context.lineWidth = 2;
        context.lineJoin = context.lineCap = "round"        ;
        context.arc(137, 72, 59, 0, 6.283185307179586, false);
        context.moveTo(96, 45);
        context.lineTo(95, 61);
        context.lineTo(112, 56);
        context.lineTo(95, 45);
        context.moveTo(156, 57);
        context.lineTo(175, 51);
        context.lineTo(172, 64);
        context.lineTo(157, 58);
        context.moveTo(91, 42);
        context.quadraticCurveTo(94, 36, 115, 46);
        context.moveTo(150, 51);
        context.quadraticCurveTo(166, 40, 179, 47);
        context.moveTo(133, 59);
        context.lineTo(144, 81);
        context.lineTo(131, 84);
        context.moveTo(105, 96);
        context.bezierCurveTo(105, 130, 164, 97, 164, 97);

        context.stroke();
        context.closePath();
        let dataToRenurn = {
            url: $canvas.toDataURL("png"),
            err
        }

        return dataToRenurn;
    }

    ImageTwo (Iam = null, fill = null, stroke = null, font = null) {
        const {$canvas} = this;
        // description for user.
        $canvas.dataset.Iam = Iam !== null? Iam : "Student";
        // fill of user
        $canvas.dataset.fill = fill !== null? fill : "white";
        // stroke of user
        $canvas.dataset.stroke = stroke !== null? stroke : "black";
        // font family for user
        $canvas.dataset.font = font !== null? font : "normal";

        let context = undefined; 
        $canvas.width = 274;
        $canvas.height = 235;
        let {width, height, dataset} = $canvas,
        err = null;
        
        context = $canvas.getContext("2d");
        context.fillStyle = dataset.fill;
        context.fillRect(0, 0, width, height);

        context.fillStyle = context.strokeStyle = dataset.stroke;
        context.font = `bolder 25px ${dataset.font}`;

        let measure = context.measureText(dataset.Iam);
        if(measure.width > width) {
            dataset.Iam = "Student";
            measure = context.measureText(dataset.Iam);
            err = "la descripcion es muy larga";
        } else err = null;
        context.fillText(dataset.Iam, width/2 - measure.width /2, 180);

        context.lineWidth = 2;
        context.lineJoin = context.lineCap = "round"        ;
        context.arc(137, 72, 59, 0, 6.283185307179586, false);
        context.moveTo(96, 45);
        context.lineTo(95, 61);
        context.lineTo(112, 56);
        context.lineTo(95, 45);
        context.moveTo(156, 57);
        context.lineTo(175, 51);
        context.lineTo(172, 64);
        context.lineTo(157, 58);
        context.moveTo(91, 42);
        context.quadraticCurveTo(94, 36, 115, 46);
        context.moveTo(150, 51);
        context.quadraticCurveTo(166, 40, 179, 47);
        context.moveTo(133, 59);
        context.lineTo(144, 81);
        context.lineTo(131, 84);
        context.moveTo(107, 102);
        context.bezierCurveTo(107, 132, 163, 132, 163, 104);
        context.bezierCurveTo(107, 132, 107, 102, 107, 102);


        context.stroke();
        context.closePath();
        let dataToRenurn = {
            url: $canvas.toDataURL("png"),
            err
        }

        return dataToRenurn;
    }
    ImageThree (Iam = null, fill = null, stroke = null, font = null) {
        const {$canvas} = this;
        // description for user.
        $canvas.dataset.Iam = Iam !== null? Iam : "Student";
        // fill of user
        $canvas.dataset.fill = fill !== null? fill : "white";
        // stroke of user
        $canvas.dataset.stroke = stroke !== null? stroke : "black";
        // font family for user
        $canvas.dataset.font = font !== null? font : "normal";

        let context = undefined;
        $canvas.width = 274;
        $canvas.height = 235;
        let {width, height, dataset} = $canvas,
        err = null;
        
        context = $canvas.getContext("2d");
        context.fillStyle = dataset.fill;
        context.fillRect(0, 0, width, height);

        context.fillStyle = context.strokeStyle = dataset.stroke;
        context.font = `bolder 25px ${dataset.font}`;

        let measure = context.measureText(dataset.Iam);
        if(measure.width > width) {
            dataset.Iam = "Student";
            measure = context.measureText(dataset.Iam);
            err = "la descripcion es muy larga";
        } else err = null;
        context.fillText(dataset.Iam, width/2 - measure.width /2, 180);

        context.lineWidth = 2;
        context.lineJoin = context.lineCap = "round"        ;
        context.arc(137, 72, 59, 0, 6.283185307179586, false);
        context.moveTo(96, 45);
        context.lineTo(95, 61);
        context.lineTo(112, 56);
        context.lineTo(95, 45);
        context.moveTo(156, 57);
        context.lineTo(175, 51);
        context.lineTo(172, 64);
        context.lineTo(157, 58);
        context.moveTo(91, 42);
        context.quadraticCurveTo(94, 36, 115, 46);
        context.moveTo(150, 51);
        context.quadraticCurveTo(166, 40, 179, 47);
        context.moveTo(133, 59);
        context.lineTo(144, 81);
        context.lineTo(131, 84);
        context.moveTo(107, 102);
        context.bezierCurveTo(107, 132, 163, 132, 163, 104);


        context.stroke();
        context.closePath();
        let dataToRenurn = {
            url: $canvas.toDataURL("png"),
            err
        }

        return dataToRenurn;
    }
    ImageFour (Iam = null, fill = null, stroke = null, font = null) {
        const {$canvas} = this;
        // description for user.
        $canvas.dataset.Iam = Iam !== null? Iam : "Student";
        // fill of user
        $canvas.dataset.fill = fill !== null? fill : "white";
        // stroke of user
        $canvas.dataset.stroke = stroke !== null? stroke : "black";
        // font family for user
        $canvas.dataset.font = font !== null? font : "normal";

        let context = undefined;
        $canvas.width = 274;
        $canvas.height = 235;
        let {width, height, dataset} = $canvas,
        err = null;
        
        context = $canvas.getContext("2d");
        context.fillStyle = dataset.fill;
        context.fillRect(0, 0, width, height);

        context.fillStyle = context.strokeStyle = dataset.stroke;
        context.font = `bolder 25px ${dataset.font}`;

        let measure = context.measureText(dataset.Iam);
        if(measure.width > width) {
            dataset.Iam = "Student";
            measure = context.measureText(dataset.Iam);
            err = "la descripcion es muy larga";
        } else err = null;
        context.fillText(dataset.Iam, width/2 - measure.width /2, 180);

        context.lineWidth = 2;
        context.lineJoin = context.lineCap = "round"        ;
        context.arc(137, 72, 59, 0, 6.283185307179586, false);
        context.arc(137, 72, 59, 0, 6.283185307179586, false);
        context.moveTo(96, 45);
        context.lineTo(95, 61);
        context.lineTo(112, 56);
        context.lineTo(95, 45);
        context.moveTo(156, 57);
        context.lineTo(175, 51);
        context.lineTo(172, 64);
        context.lineTo(157, 58);
        context.moveTo(91, 42);
        context.quadraticCurveTo(94, 36, 115, 46);
        context.moveTo(150, 51);
        context.quadraticCurveTo(166, 40, 179, 47);
        context.moveTo(133, 59);
        context.lineTo(144, 81);
        context.lineTo(131, 84);
        context.moveTo(107, 102);
        context.bezierCurveTo(107, 132, 163, 132, 163, 104);
        context.lineTo(106, 102);
        // one
        context.stroke();
        context.closePath();
        let dataToRenurn = {
            url: $canvas.toDataURL("png"),
            err
        }

        return dataToRenurn;
    }
    ImageFive (Iam = null, fill = null, stroke = null, font = null) {
        const {$canvas} = this;
        // description for user.
        $canvas.dataset.Iam = Iam !== null? Iam : "Student";
        // fill of user
        $canvas.dataset.fill = fill !== null? fill : "white";
        // stroke of user
        $canvas.dataset.stroke = stroke !== null? stroke : "black";
        // font family for user
        $canvas.dataset.font = font !== null? font : "normal";

        let context = undefined;
        $canvas.width = 274;
        $canvas.height = 235;
        let {width, height, dataset} = $canvas,
        err = null;
        
        context = $canvas.getContext("2d");
        context.fillStyle = dataset.fill;
        context.fillRect(0, 0, width, height);

        context.fillStyle = context.strokeStyle = dataset.stroke;
        context.font = `bolder 25px ${dataset.font}`;

        let measure = context.measureText(dataset.Iam);
        if(measure.width > width) {
            dataset.Iam = "Student";
            measure = context.measureText(dataset.Iam);
            err = "la descripcion es muy larga";
        } else err = null;
        context.fillText(dataset.Iam, width/2 - measure.width /2, 180);

        context.lineWidth = 2;
        context.lineJoin = context.lineCap = "round"        ;
        context.arc(137, 72, 59, 0, 6.283185307179586, false);
        context.moveTo(96, 45);
        context.lineTo(95, 61);
        context.lineTo(112, 56);
        context.lineTo(95, 45);
        context.moveTo(156, 57);
        context.lineTo(175, 51);
        context.lineTo(172, 64);
        context.lineTo(157, 58);
        context.moveTo(91, 42);
        context.quadraticCurveTo(94, 36, 115, 46);
        context.moveTo(150, 51);
        context.quadraticCurveTo(166, 40, 179, 47);
        context.moveTo(133, 59);
        context.lineTo(144, 81);
        context.lineTo(131, 84);
        context.moveTo(116, 108);
        context.lineTo(152, 110);
        // two
        context.stroke();
        context.closePath();
        let dataToRenurn = {
            url: $canvas.toDataURL("png"),
            err
        }

        return dataToRenurn;
    }
    ImageSix (Iam = null, fill = null, stroke = null, font = null) {
        const {$canvas} = this;
        // description for user.
        $canvas.dataset.Iam = Iam !== null? Iam : "Student";
        // fill of user
        $canvas.dataset.fill = fill !== null? fill : "white";
        // stroke of user
        $canvas.dataset.stroke = stroke !== null? stroke : "black";
        // font family for user
        $canvas.dataset.font = font !== null? font : "normal";

        let context = undefined;
        $canvas.width = 274;
        $canvas.height = 235;
        let {width, height, dataset} = $canvas,
        err = null;
        
        context = $canvas.getContext("2d");
        context.fillStyle = dataset.fill;
        context.fillRect(0, 0, width, height);

        context.fillStyle = context.strokeStyle = dataset.stroke;
        context.font = `bolder 25px ${dataset.font}`;

        let measure = context.measureText(dataset.Iam);
        if(measure.width > width) {
            dataset.Iam = "Student";
            measure = context.measureText(dataset.Iam);
            err = "la descripcion es muy larga";
        } else err = null;
        context.fillText(dataset.Iam, width/2 - measure.width /2, 180);

        context.lineWidth = 2;
        context.lineJoin = context.lineCap = "round"        ;
        context.arc(137, 72, 59, 0, 6.283185307179586, false);
        context.moveTo(96, 45);
        context.lineTo(95, 61);
        context.lineTo(112, 56);
        context.lineTo(95, 45);
        context.moveTo(156, 57);
        context.lineTo(175, 51);
        context.lineTo(172, 64);
        context.lineTo(157, 58);
        context.moveTo(91, 42);
        context.quadraticCurveTo(94, 36, 115, 46);
        context.moveTo(150, 51);
        context.quadraticCurveTo(166, 40, 179, 47);
        context.moveTo(133, 59);
        context.lineTo(144, 81);
        context.lineTo(131, 84);
        context.moveTo(109, 101);
        context.lineTo(164, 104);
        context.quadraticCurveTo(130, 140, 110, 102);
        context.lineTo(118, 108);
        context.lineTo(119, 103);
        context.lineTo(124, 108);
        context.lineTo(129, 104);
        context.lineTo(134, 108);
        context.lineTo(142, 107);
        context.lineTo(148, 105);
        context.lineTo(153, 109);
        context.lineTo(161, 105);

        // three
        context.stroke();
        context.closePath();
        let dataToRenurn = {
            url: $canvas.toDataURL("png"),
            err
        }

        return dataToRenurn;
    }

    ImageSeven (Iam = null, fill = null, stroke = null, font = null) {
        const {$canvas} = this;
        // description for user.
        $canvas.dataset.Iam = Iam !== null? Iam : "Student";
        // fill of user
        $canvas.dataset.fill = fill !== null? fill : "white";
        // stroke of user
        $canvas.dataset.stroke = stroke !== null? stroke : "black";
        // font family for user
        $canvas.dataset.font = font !== null? font : "normal";

        let context = undefined;
        $canvas.width = 274;
        $canvas.height = 235;
        let {width, height, dataset} = $canvas,
        err = null;
        
        context = $canvas.getContext("2d");
        context.fillStyle = dataset.fill;
        context.fillRect(0, 0, width, height);

        context.fillStyle = context.strokeStyle = dataset.stroke;
        context.font = `bolder 25px ${dataset.font}`;

        let measure = context.measureText(dataset.Iam);
        if(measure.width > width) {
            dataset.Iam = "Student";
            measure = context.measureText(dataset.Iam);
            err = "la descripcion es muy larga";
        } else err = null;
        context.fillText(dataset.Iam, width/2 - measure.width /2, 180);

        context.lineWidth = 2;
        context.lineJoin = context.lineCap = "round"        ;
        context.arc(137, 72, 59, 0, 6.283185307179586, false);
        context.moveTo(96, 45);
        context.lineTo(95, 61);
        context.lineTo(112, 56);
        context.lineTo(95, 45);
        context.moveTo(156, 57);
        context.lineTo(175, 51);
        context.lineTo(172, 64);
        context.lineTo(157, 58);
        context.moveTo(91, 42);
        context.quadraticCurveTo(94, 36, 115, 46);
        context.moveTo(150, 51);
        context.quadraticCurveTo(166, 40, 179, 47);
        context.moveTo(133, 59);
        context.lineTo(144, 81);
        context.lineTo(131, 84);
        context.moveTo(109, 101);
        context.lineTo(164, 104);
        context.quadraticCurveTo(130, 140, 110, 102);
        context.lineTo(116, 111);
        context.lineTo(116, 102);
        context.moveTo(122, 116);
        context.lineTo(123, 104);
        context.moveTo(130, 122);
        context.lineTo(131, 103);
        context.moveTo(140, 121);
        context.lineTo(141, 103);
        context.moveTo(149, 117);
        context.lineTo(148, 104);
        context.moveTo(158, 111);
        context.lineTo(155, 105);


        // four
        context.stroke();
        context.closePath();
        let dataToRenurn = {
            url: $canvas.toDataURL("png"),
            err
        }

        return dataToRenurn;
    }
    ImageEight (Iam = null, fill = null, stroke = null, font = null) {
        const {$canvas} = this;
        // description for user.
        $canvas.dataset.Iam = Iam !== null? Iam : "Student";
        // fill of user
        $canvas.dataset.fill = fill !== null? fill : "white";
        // stroke of user
        $canvas.dataset.stroke = stroke !== null? stroke : "black";
        // font family for user
        $canvas.dataset.font = font !== null? font : "normal";

        let context = undefined;
        $canvas.width = 274;
        $canvas.height = 235;
        let {width, height, dataset} = $canvas,
        err = null;
        
        context = $canvas.getContext("2d");
        context.fillStyle = dataset.fill;
        context.fillRect(0, 0, width, height);

        context.fillStyle = context.strokeStyle = dataset.stroke;
        context.font = `bolder 25px ${dataset.font}`;

        let measure = context.measureText(dataset.Iam);
        if(measure.width > width) {
            dataset.Iam = "Student";
            measure = context.measureText(dataset.Iam);
            err = "la descripcion es muy larga";
        } else err = null;
        context.fillText(dataset.Iam, width/2 - measure.width /2, 180);

        context.lineWidth = 2;
        context.lineJoin = context.lineCap = "round"        ;
        context.arc(137, 72, 59, 0, 6.283185307179586, false);
        context.moveTo(96, 45);
        context.lineTo(95, 61);
        context.lineTo(112, 56);
        context.lineTo(95, 45);
        context.moveTo(156, 57);
        context.lineTo(175, 51);
        context.lineTo(172, 64);
        context.lineTo(157, 58);
        context.moveTo(91, 42);
        context.quadraticCurveTo(94, 36, 115, 46);
        context.moveTo(150, 51);
        context.quadraticCurveTo(166, 40, 179, 47);
        context.moveTo(133, 59);
        context.lineTo(144, 81);
        context.lineTo(131, 84);
        context.moveTo(109, 101);
        context.lineTo(164, 104);
        context.quadraticCurveTo(130, 140, 110, 102);
        context.lineTo(116, 111);
        context.moveTo(132, 104);
        context.lineTo(131, 113);
        context.lineTo(140, 113);
        context.lineTo(140, 104);
        context.lineTo(133, 103);


        // five
        context.stroke();
        context.closePath();
        let dataToRenurn = {
            url: $canvas.toDataURL("png"),
            err
        }

        return dataToRenurn;
    }

    ImageNine (Iam = null, fill = null, stroke = null, font = null) {
        const {$canvas} = this;
        // description for user.
        $canvas.dataset.Iam = Iam !== null? Iam : "Student";
        // fill of user
        $canvas.dataset.fill = fill !== null? fill : "white";
        // stroke of user
        $canvas.dataset.stroke = stroke !== null? stroke : "black";
        // font family for user
        $canvas.dataset.font = font !== null? font : "normal";

        let context = undefined;
        $canvas.width = 274;
        $canvas.height = 235;
        let {width, height, dataset} = $canvas,
        err = null;
        
        context = $canvas.getContext("2d");
        context.fillStyle = dataset.fill;
        context.fillRect(0, 0, width, height);

        context.fillStyle = context.strokeStyle = dataset.stroke;
        context.font = `bolder 25px ${dataset.font}`;

        let measure = context.measureText(dataset.Iam);
        if(measure.width > width) {
            dataset.Iam = "Student";
            measure = context.measureText(dataset.Iam);
            err = "la descripcion es muy larga";
        } else err = null;
        context.fillText(dataset.Iam, width/2 - measure.width /2, 180);

        context.lineWidth = 2;
        context.lineJoin = context.lineCap = "round"        ;
        context.arc(137, 72, 59, 0, 6.283185307179586, false);
        context.moveTo(96, 45);
        context.lineTo(95, 61);
        context.lineTo(112, 56);
        context.lineTo(95, 45);
        context.moveTo(156, 57);
        context.lineTo(175, 51);
        context.lineTo(172, 64);
        context.lineTo(157, 58);
        context.moveTo(91, 42);
        context.quadraticCurveTo(94, 36, 115, 46);
        context.moveTo(150, 51);
        context.quadraticCurveTo(166, 40, 179, 47);
        context.moveTo(133, 59);
        context.lineTo(144, 81);
        context.lineTo(131, 84);
        context.moveTo(109, 101);
        // six
        context.stroke();
        context.closePath();
        let dataToRenurn = {
            url: $canvas.toDataURL("png"),
            err
        }

        return dataToRenurn;
    }

    ImageTen (Iam = null, fill = null, stroke = null, font = null) {
        const {$canvas} = this;
        // description for user.
        $canvas.dataset.Iam = Iam !== null? Iam : "Student";
        // fill of user
        $canvas.dataset.fill = fill !== null? fill : "white";
        // stroke of user
        $canvas.dataset.stroke = stroke !== null? stroke : "black";
        // font family for user
        $canvas.dataset.font = font !== null? font : "normal";

        let context = undefined;
        $canvas.width = 274;
        $canvas.height = 235;
        let {width, height, dataset} = $canvas,
        err = null;
        
        context = $canvas.getContext("2d");
        context.fillStyle = dataset.fill;
        context.fillRect(0, 0, width, height);

        context.fillStyle = context.strokeStyle = dataset.stroke;
        context.font = `bolder 25px ${dataset.font}`;

        let measure = context.measureText(dataset.Iam);
        if(measure.width > width) {
            dataset.Iam = "Student";
            measure = context.measureText(dataset.Iam);
            err = "la descripcion es muy larga";
        } else err = null;
        context.fillText(dataset.Iam, width/2 - measure.width /2, 180);

        context.lineWidth = 2;
        context.lineJoin = context.lineCap = "round"        ;
        context.arc(137, 72, 59, 0, 6.283185307179586, false);
        context.moveTo(93, 50);
        context.lineTo(88, 62);
        context.lineTo(106, 60);
        context.lineTo(93, 50);
        context.moveTo(163, 61);
        context.lineTo(180, 56);
        context.lineTo(183, 68);
        context.lineTo(165, 61);
        context.moveTo(137, 62);
        context.lineTo(122, 79);
        context.lineTo(136, 89);
        context.moveTo(113, 110);
        context.moveTo(111, 109);
        context.quadraticCurveTo(141, 129, 165, 109);
        // seven
        context.stroke();
        context.closePath();
        let dataToRenurn = {
            url: $canvas.toDataURL("png"),
            err
        }

        return dataToRenurn;
    }
    ImageEleven (Iam = null, fill = null, stroke = null, font = null) {
        const {$canvas} = this;
        // description for user.
        $canvas.dataset.Iam = Iam !== null? Iam : "Student";
        // fill of user
        $canvas.dataset.fill = fill !== null? fill : "white";
        // stroke of user
        $canvas.dataset.stroke = stroke !== null? stroke : "black";
        // font family for user
        $canvas.dataset.font = font !== null? font : "normal";

        let context = undefined;
        $canvas.width = 274;
        $canvas.height = 235;
        let {width, height, dataset} = $canvas,
        err = null;
        
        context = $canvas.getContext("2d");
        context.fillStyle = dataset.fill;
        context.fillRect(0, 0, width, height);

        context.fillStyle = context.strokeStyle = dataset.stroke;
        context.font = `bolder 25px ${dataset.font}`;

        let measure = context.measureText(dataset.Iam);
        if(measure.width > width) {
            dataset.Iam = "Student";
            measure = context.measureText(dataset.Iam);
            err = "la descripcion es muy larga";
        } else err = null;
        context.fillText(dataset.Iam, width/2 - measure.width /2, 180);

        context.lineWidth = 2;
        context.lineJoin = context.lineCap = "round"        ;
        context.arc(137, 71, 59, 0, 6.283185307179586, false);
        context.moveTo(105, 19);
        context.bezierCurveTo(30, 30, 132, 125, 32, 125);
        context.moveTo(110, 17);
        context.bezierCurveTo(355, 15, 113, 126, 253, 126);
        context.moveTo(104, 20);
        context.lineTo(79, 24);
        context.lineTo(59, 37);
        context.lineTo(52, 64);
        context.lineTo(42, 91);
        context.lineTo(32, 119);
        context.moveTo(104, 20);
        context.lineTo(90, 18);
        context.lineTo(71, 18);
        context.lineTo(61, 25);
        context.lineTo(43, 44);
        context.lineTo(31, 62);
        context.lineTo(28, 77);
        context.lineTo(20, 97);
        context.lineTo(15, 110);
        context.lineTo(20, 121);
        context.moveTo(100, 22);
        context.lineTo(98, 14);
        context.lineTo(113, 12);
        context.lineTo(130, 9);
        context.lineTo(150, 13);
        context.lineTo(171, 15);
        context.lineTo(197, 21);
        context.lineTo(207, 39);
        context.lineTo(207, 60);
        context.lineTo(203, 108);
        context.lineTo(214, 121);
        context.moveTo(103, 18);
        context.lineTo(110, 9);
        context.lineTo(137, 2);
        context.lineTo(168, 4);
        context.lineTo(203, 11);
        context.lineTo(230, 19);
        context.lineTo(240, 42);
        context.lineTo(240, 63);
        context.lineTo(233, 84);
        context.lineTo(234, 102);
        context.lineTo(249, 112);
        context.lineTo(263, 131);
        context.moveTo(135, 3);
        context.lineTo(97, 4);
        context.lineTo(58, 16);
        context.lineTo(50, 26);
        context.lineTo(35, 45);
        context.lineTo(28, 64);
        context.lineTo(25, 85);
        context.lineTo(22, 115);
        context.lineTo(19, 123);
        context.moveTo(263, 125);
        context.lineTo(258, 112);
        context.lineTo(258, 82);
        context.lineTo(253, 65);
        context.lineTo(239, 45);
        context.lineTo(225, 17);
        context.lineTo(184, 14);
        context.lineTo(126, 10);
        context.lineTo(88, 12);
        context.lineTo(58, 28);
        context.lineTo(24, 65);
        context.lineTo(29, 94);
        context.lineTo(41, 117);
        context.moveTo(79, 94);
        context.lineTo(81, 106);
        context.lineTo(76, 119);
        context.lineTo(59, 129);
        context.lineTo(64, 124);
        context.lineTo(83, 121);
        context.lineTo(83, 111);
        context.lineTo(83, 110);
        context.moveTo(181, 26);
        context.lineTo(200, 53);
        context.lineTo(198, 72);
        context.lineTo(197, 101);
        context.lineTo(191, 117);
        context.lineTo(197, 126);
        context.lineTo(202, 125);
        context.moveTo(93, 49);
        context.lineTo(89, 57);
        context.lineTo(98, 59);
        context.lineTo(105, 58);
        context.lineTo(108, 57);
        context.lineTo(93, 50);
        context.moveTo(164, 57);
        context.lineTo(183, 53);
        context.lineTo(186, 63);
        context.lineTo(178, 63);
        context.lineTo(170, 61);
        context.lineTo(166, 59);
        context.moveTo(86, 46);
        context.quadraticCurveTo(102, 40, 113, 54);
        context.moveTo(158, 57);
        context.quadraticCurveTo(160, 47, 187, 48);
        context.moveTo(136, 65);
        context.lineTo(150, 87);
        context.lineTo(148, 92);
        context.lineTo(134, 96);
        context.moveTo(110, 111);
        context.quadraticCurveTo(130, 131, 160, 112);
        // nine
        context.stroke();
        context.closePath();
        let dataToRenurn = {
            url: $canvas.toDataURL("png"),
            err
        }

        return dataToRenurn;
    }

    ImageTwelve (Iam = null, fill = null, stroke = null, font = null) {
        const {$canvas} = this;
        // description for user.
        $canvas.dataset.Iam = Iam !== null? Iam : "Student";
        // fill of user
        $canvas.dataset.fill = fill !== null? fill : "white";
        // stroke of user
        $canvas.dataset.stroke = stroke !== null? stroke : "black";
        // font family for user
        $canvas.dataset.font = font !== null? font : "normal";

        let context = undefined;
        $canvas.width = 274;
        $canvas.height = 235;
        let {width, height, dataset} = $canvas,
        err = null;
        
        context = $canvas.getContext("2d");
        context.fillStyle = dataset.fill;
        context.fillRect(0, 0, width, height);

        context.fillStyle = context.strokeStyle = dataset.stroke;
        context.font = `bolder 25px ${dataset.font}`;

        let measure = context.measureText(dataset.Iam);
        if(measure.width > width) {
            dataset.Iam = "Student";
            measure = context.measureText(dataset.Iam);
            err = "la descripcion es muy larga";
        } else err = null;
        context.fillText(dataset.Iam, width/2 - measure.width /2, 180);

        context.lineWidth = 2;
        context.lineJoin = context.lineCap = "round"        ;
        context.arc(137, 71, 59, 0, 6.283185307179586, false);
        context.moveTo(105, 19);
        context.bezierCurveTo(30, 30, 132, 125, 32, 125);
        context.moveTo(110, 17);
        context.bezierCurveTo(355, 15, 113, 126, 253, 126);
        context.moveTo(104, 20);
        context.lineTo(79, 24);
        context.lineTo(59, 37);
        context.lineTo(52, 64);
        context.lineTo(42, 91);
        context.lineTo(32, 119);
        context.moveTo(104, 20);
        context.lineTo(90, 18);
        context.lineTo(71, 18);
        context.lineTo(61, 25);
        context.lineTo(43, 44);
        context.lineTo(31, 62);
        context.lineTo(28, 77);
        context.lineTo(20, 97);
        context.lineTo(15, 110);
        context.lineTo(20, 121);
        context.moveTo(100, 22);
        context.lineTo(98, 14);
        context.lineTo(113, 12);
        context.lineTo(130, 9);
        context.lineTo(150, 13);
        context.lineTo(171, 15);
        context.lineTo(197, 21);
        context.lineTo(207, 39);
        context.lineTo(207, 60);
        context.lineTo(203, 108);
        context.lineTo(214, 121);
        context.moveTo(103, 18);
        context.lineTo(110, 9);
        context.lineTo(137, 2);
        context.lineTo(168, 4);
        context.lineTo(203, 11);
        context.lineTo(230, 19);
        context.lineTo(240, 42);
        context.lineTo(240, 63);
        context.lineTo(233, 84);
        context.lineTo(234, 102);
        context.lineTo(249, 112);
        context.lineTo(263, 131);
        context.moveTo(135, 3);
        context.lineTo(97, 4);
        context.lineTo(58, 16);
        context.lineTo(50, 26);
        context.lineTo(35, 45);
        context.lineTo(28, 64);
        context.lineTo(25, 85);
        context.lineTo(22, 115);
        context.lineTo(19, 123);
        context.moveTo(263, 125);
        context.lineTo(258, 112);
        context.lineTo(258, 82);
        context.lineTo(253, 65);
        context.lineTo(239, 45);
        context.lineTo(225, 17);
        context.lineTo(184, 14);
        context.lineTo(126, 10);
        context.lineTo(88, 12);
        context.lineTo(58, 28);
        context.lineTo(24, 65);
        context.lineTo(29, 94);
        context.lineTo(41, 117);
        context.moveTo(79, 94);
        context.lineTo(81, 106);
        context.lineTo(76, 119);
        context.lineTo(59, 129);
        context.lineTo(64, 124);
        context.lineTo(83, 121);
        context.lineTo(83, 111);
        context.lineTo(83, 110);
        context.moveTo(181, 26);
        context.lineTo(200, 53);
        context.lineTo(198, 72);
        context.lineTo(197, 101);
        context.lineTo(191, 117);
        context.lineTo(197, 126);
        context.lineTo(202, 125);
        context.moveTo(93, 49);
        context.lineTo(89, 57);
        context.lineTo(98, 59);
        context.lineTo(105, 58);
        context.lineTo(108, 57);
        context.lineTo(93, 50);
        context.moveTo(164, 57);
        context.lineTo(183, 53);
        context.lineTo(186, 63);
        context.lineTo(178, 63);
        context.lineTo(170, 61);
        context.lineTo(166, 59);
        context.moveTo(86, 46);
        context.quadraticCurveTo(102, 40, 113, 54);
        context.moveTo(158, 57);
        context.quadraticCurveTo(160, 47, 187, 48);
        context.moveTo(136, 65);
        context.lineTo(150, 87);
        context.lineTo(148, 92);
        context.lineTo(134, 96);
        context.moveTo(106, 104);
        context.quadraticCurveTo(116, 144, 174, 96);

        // Eleven
        context.stroke();
        context.closePath();
        let dataToRenurn = {
            url: $canvas.toDataURL("png"),
            err
        }

        return dataToRenurn;
    }
    ImageThreeten (Iam = null, fill = null, stroke = null, font = null) {
        const {$canvas} = this;
        // description for user.
        $canvas.dataset.Iam = Iam !== null? Iam : "Student";
        // fill of user
        $canvas.dataset.fill = fill !== null? fill : "white";
        // stroke of user
        $canvas.dataset.stroke = stroke !== null? stroke : "black";
        // font family for user
        $canvas.dataset.font = font !== null? font : "normal";

        let context = undefined;
        $canvas.width = 274;
        $canvas.height = 235;
        let {width, height, dataset} = $canvas,
        err = null;
        
        context = $canvas.getContext("2d");
        context.fillStyle = dataset.fill;
        context.fillRect(0, 0, width, height);

        context.fillStyle = context.strokeStyle = dataset.stroke;
        context.font = `bolder 25px ${dataset.font}`;

        let measure = context.measureText(dataset.Iam);
        if(measure.width > width) {
            dataset.Iam = "Student";
            measure = context.measureText(dataset.Iam);
            err = "la descripcion es muy larga";
        } else err = null;
        context.fillText(dataset.Iam, width/2 - measure.width /2, 180);

        context.lineWidth = 2;
        context.lineJoin = context.lineCap = "round";
        context.arc(137, 71, 59, 0, 6.283185307179586, false);
        context.moveTo(105, 19);
        context.bezierCurveTo(30, 30, 132, 125, 32, 125);
        context.moveTo(110, 17);
        context.bezierCurveTo(355, 15, 113, 126, 253, 126);
        context.moveTo(104, 20);
        context.lineTo(79, 24);
        context.lineTo(59, 37);
        context.lineTo(52, 64);
        context.lineTo(42, 91);
        context.lineTo(32, 119);
        context.moveTo(104, 20);
        context.lineTo(90, 18);
        context.lineTo(71, 18);
        context.lineTo(61, 25);
        context.lineTo(43, 44);
        context.lineTo(31, 62);
        context.lineTo(28, 77);
        context.lineTo(20, 97);
        context.lineTo(15, 110);
        context.lineTo(20, 121);
        context.moveTo(100, 22);
        context.lineTo(98, 14);
        context.lineTo(113, 12);
        context.lineTo(130, 9);
        context.lineTo(150, 13);
        context.lineTo(171, 15);
        context.lineTo(197, 21);
        context.lineTo(207, 39);
        context.lineTo(207, 60);
        context.lineTo(203, 108);
        context.lineTo(214, 121);
        context.moveTo(103, 18);
        context.lineTo(110, 9);
        context.lineTo(137, 2);
        context.lineTo(168, 4);
        context.lineTo(203, 11);
        context.lineTo(230, 19);
        context.lineTo(240, 42);
        context.lineTo(240, 63);
        context.lineTo(233, 84);
        context.lineTo(234, 102);
        context.lineTo(249, 112);
        context.lineTo(263, 131);
        context.moveTo(135, 3);
        context.lineTo(97, 4);
        context.lineTo(58, 16);
        context.lineTo(50, 26);
        context.lineTo(35, 45);
        context.lineTo(28, 64);
        context.lineTo(25, 85);
        context.lineTo(22, 115);
        context.lineTo(19, 123);
        context.moveTo(263, 125);
        context.lineTo(258, 112);
        context.lineTo(258, 82);
        context.lineTo(253, 65);
        context.lineTo(239, 45);
        context.lineTo(225, 17);
        context.lineTo(184, 14);
        context.lineTo(126, 10);
        context.lineTo(88, 12);
        context.lineTo(58, 28);
        context.lineTo(24, 65);
        context.lineTo(29, 94);
        context.lineTo(41, 117);
        context.moveTo(79, 94);
        context.lineTo(81, 106);
        context.lineTo(76, 119);
        context.lineTo(59, 129);
        context.lineTo(64, 124);
        context.lineTo(83, 121);
        context.lineTo(83, 111);
        context.lineTo(83, 110);
        context.moveTo(181, 26);
        context.lineTo(200, 53);
        context.lineTo(198, 72);
        context.lineTo(197, 101);
        context.lineTo(191, 117);
        context.lineTo(197, 126);
        context.lineTo(202, 125);
        context.moveTo(93, 49);
        context.lineTo(89, 57);
        context.lineTo(98, 59);
        context.lineTo(105, 58);
        context.lineTo(108, 57);
        context.lineTo(93, 50);
        context.moveTo(164, 57);
        context.lineTo(183, 53);
        context.lineTo(186, 63);
        context.lineTo(178, 63);
        context.lineTo(170, 61);
        context.lineTo(166, 59);
        context.moveTo(86, 46);
        context.quadraticCurveTo(102, 40, 113, 54);
        context.moveTo(158, 57);
        context.quadraticCurveTo(160, 47, 187, 48);
        context.moveTo(136, 65);
        context.lineTo(150, 87);
        context.lineTo(148, 92);
        context.lineTo(134, 96);
        context.moveTo(112, 109);
        context.lineTo(160, 110);
        context.quadraticCurveTo(140, 130, 112, 109);

        // Twelve
        context.stroke();
        context.closePath();
        let dataToRenurn = {
            url: $canvas.toDataURL("png"),
            err
        }

        return dataToRenurn;
    }

    ImageFourten (Iam = null, fill = null, stroke = null, font = null) {
        const {$canvas} = this;
        // description for user.
        $canvas.dataset.Iam = Iam !== null? Iam : "Student";
        // fill of user
        $canvas.dataset.fill = fill !== null? fill : "white";
        // stroke of user
        $canvas.dataset.stroke = stroke !== null? stroke : "black";
        // font family for user
        $canvas.dataset.font = font !== null? font : "normal";

        let context = undefined;
        $canvas.width = 274;
        $canvas.height = 235;
        let {width, height, dataset} = $canvas,
        err = null;
        
        context = $canvas.getContext("2d");
        context.fillStyle = dataset.fill;
        context.fillRect(0, 0, width, height);

        context.fillStyle = context.strokeStyle = dataset.stroke;
        context.font = `bolder 25px ${dataset.font}`;

        let measure = context.measureText(dataset.Iam);
        if(measure.width > width) {
            dataset.Iam = "Student";
            measure = context.measureText(dataset.Iam);
            err = "la descripcion es muy larga";
        } else err = null;
        context.fillText(dataset.Iam, width/2 - measure.width /2, 180);

        context.lineWidth = 2;
        context.lineJoin = context.lineCap = "round";
        context.arc(137, 71, 59, 0, 6.283185307179586, false);
        context.moveTo(105, 19);
        context.bezierCurveTo(30, 30, 132, 125, 32, 125);
        context.moveTo(110, 17);
        context.bezierCurveTo(355, 15, 113, 126, 253, 126);
        context.moveTo(104, 20);
        context.lineTo(79, 24);
        context.lineTo(59, 37);
        context.lineTo(52, 64);
        context.lineTo(42, 91);
        context.lineTo(32, 119);
        context.moveTo(104, 20);
        context.lineTo(90, 18);
        context.lineTo(71, 18);
        context.lineTo(61, 25);
        context.lineTo(43, 44);
        context.lineTo(31, 62);
        context.lineTo(28, 77);
        context.lineTo(20, 97);
        context.lineTo(15, 110);
        context.lineTo(20, 121);
        context.moveTo(100, 22);
        context.lineTo(98, 14);
        context.lineTo(113, 12);
        context.lineTo(130, 9);
        context.lineTo(150, 13);
        context.lineTo(171, 15);
        context.lineTo(197, 21);
        context.lineTo(207, 39);
        context.lineTo(207, 60);
        context.lineTo(203, 108);
        context.lineTo(214, 121);
        context.moveTo(103, 18);
        context.lineTo(110, 9);
        context.lineTo(137, 2);
        context.lineTo(168, 4);
        context.lineTo(203, 11);
        context.lineTo(230, 19);
        context.lineTo(240, 42);
        context.lineTo(240, 63);
        context.lineTo(233, 84);
        context.lineTo(234, 102);
        context.lineTo(249, 112);
        context.lineTo(263, 131);
        context.moveTo(135, 3);
        context.lineTo(97, 4);
        context.lineTo(58, 16);
        context.lineTo(50, 26);
        context.lineTo(35, 45);
        context.lineTo(28, 64);
        context.lineTo(25, 85);
        context.lineTo(22, 115);
        context.lineTo(19, 123);
        context.moveTo(263, 125);
        context.lineTo(258, 112);
        context.lineTo(258, 82);
        context.lineTo(253, 65);
        context.lineTo(239, 45);
        context.lineTo(225, 17);
        context.lineTo(184, 14);
        context.lineTo(126, 10);
        context.lineTo(88, 12);
        context.lineTo(58, 28);
        context.lineTo(24, 65);
        context.lineTo(29, 94);
        context.lineTo(41, 117);
        context.moveTo(79, 94);
        context.lineTo(81, 106);
        context.lineTo(76, 119);
        context.lineTo(59, 129);
        context.lineTo(64, 124);
        context.lineTo(83, 121);
        context.lineTo(83, 111);
        context.lineTo(83, 110);
        context.moveTo(181, 26);
        context.lineTo(200, 53);
        context.lineTo(198, 72);
        context.lineTo(197, 101);
        context.lineTo(191, 117);
        context.lineTo(197, 126);
        context.lineTo(202, 125);
        context.moveTo(93, 49);
        context.lineTo(89, 57);
        context.lineTo(98, 59);
        context.lineTo(105, 58);
        context.lineTo(108, 57);
        context.lineTo(93, 50);
        context.moveTo(164, 57);
        context.lineTo(183, 53);
        context.lineTo(186, 63);
        context.lineTo(178, 63);
        context.lineTo(170, 61);
        context.lineTo(166, 59);
        context.moveTo(86, 46);
        context.quadraticCurveTo(102, 40, 113, 54);
        context.moveTo(158, 57);
        context.quadraticCurveTo(160, 47, 187, 48);
        context.moveTo(136, 65);
        context.lineTo(150, 87);
        context.lineTo(148, 92);
        context.lineTo(134, 96);
        context.moveTo(112, 109);
        context.lineTo(160, 110);

        // Threeten
        context.stroke();
        context.closePath();
        let dataToRenurn = {
            url: $canvas.toDataURL("png"),
            err
        }

        return dataToRenurn;
    }
    ImageFiveten (Iam = null, fill = null, stroke = null, font = null) {
        const {$canvas} = this;
        // description for user.
        $canvas.dataset.Iam = Iam !== null? Iam : "Student";
        // fill of user
        $canvas.dataset.fill = fill !== null? fill : "white";
        // stroke of user
        $canvas.dataset.stroke = stroke !== null? stroke : "black";
        // font family for user
        $canvas.dataset.font = font !== null? font : "normal";

        let context = undefined;
        $canvas.width = 274;
        $canvas.height = 235;
        let {width, height, dataset} = $canvas,
        err = null;
        
        context = $canvas.getContext("2d");
        context.fillStyle = dataset.fill;
        context.fillRect(0, 0, width, height);

        context.fillStyle = context.strokeStyle = dataset.stroke;
        context.font = `bolder 25px ${dataset.font}`;

        let measure = context.measureText(dataset.Iam);
        if(measure.width > width) {
            dataset.Iam = "Student";
            measure = context.measureText(dataset.Iam);
            err = "la descripcion es muy larga";
        } else err = null;
        context.fillText(dataset.Iam, width/2 - measure.width /2, 180);

        context.lineWidth = 2;
        context.lineJoin = context.lineCap = "round";
        context.arc(137, 71, 59, 0, 6.283185307179586, false);
        context.moveTo(105, 19);
        context.bezierCurveTo(30, 30, 132, 125, 32, 125);
        context.moveTo(110, 17);
        context.bezierCurveTo(355, 15, 113, 126, 253, 126);
        context.moveTo(104, 20);
        context.lineTo(79, 24);
        context.lineTo(59, 37);
        context.lineTo(52, 64);
        context.lineTo(42, 91);
        context.lineTo(32, 119);
        context.moveTo(104, 20);
        context.lineTo(90, 18);
        context.lineTo(71, 18);
        context.lineTo(61, 25);
        context.lineTo(43, 44);
        context.lineTo(31, 62);
        context.lineTo(28, 77);
        context.lineTo(20, 97);
        context.lineTo(15, 110);
        context.lineTo(20, 121);
        context.moveTo(100, 22);
        context.lineTo(98, 14);
        context.lineTo(113, 12);
        context.lineTo(130, 9);
        context.lineTo(150, 13);
        context.lineTo(171, 15);
        context.lineTo(197, 21);
        context.lineTo(207, 39);
        context.lineTo(207, 60);
        context.lineTo(203, 108);
        context.lineTo(214, 121);
        context.moveTo(103, 18);
        context.lineTo(110, 9);
        context.lineTo(137, 2);
        context.lineTo(168, 4);
        context.lineTo(203, 11);
        context.lineTo(230, 19);
        context.lineTo(240, 42);
        context.lineTo(240, 63);
        context.lineTo(233, 84);
        context.lineTo(234, 102);
        context.lineTo(249, 112);
        context.lineTo(263, 131);
        context.moveTo(135, 3);
        context.lineTo(97, 4);
        context.lineTo(58, 16);
        context.lineTo(50, 26);
        context.lineTo(35, 45);
        context.lineTo(28, 64);
        context.lineTo(25, 85);
        context.lineTo(22, 115);
        context.lineTo(19, 123);
        context.moveTo(263, 125);
        context.lineTo(258, 112);
        context.lineTo(258, 82);
        context.lineTo(253, 65);
        context.lineTo(239, 45);
        context.lineTo(225, 17);
        context.lineTo(184, 14);
        context.lineTo(126, 10);
        context.lineTo(88, 12);
        context.lineTo(58, 28);
        context.lineTo(24, 65);
        context.lineTo(29, 94);
        context.lineTo(41, 117);
        context.moveTo(79, 94);
        context.lineTo(81, 106);
        context.lineTo(76, 119);
        context.lineTo(59, 129);
        context.lineTo(64, 124);
        context.lineTo(83, 121);
        context.lineTo(83, 111);
        context.lineTo(83, 110);
        context.moveTo(181, 26);
        context.lineTo(200, 53);
        context.lineTo(198, 72);
        context.lineTo(197, 101);
        context.lineTo(191, 117);
        context.lineTo(197, 126);
        context.lineTo(202, 125);
        context.moveTo(93, 49);
        context.lineTo(89, 57);
        context.lineTo(98, 59);
        context.lineTo(105, 58);
        context.lineTo(108, 57);
        context.lineTo(93, 50);
        context.moveTo(164, 57);
        context.lineTo(183, 53);
        context.lineTo(186, 63);
        context.lineTo(178, 63);
        context.lineTo(170, 61);
        context.lineTo(166, 59);
        context.moveTo(86, 46);
        context.quadraticCurveTo(102, 40, 113, 54);
        context.moveTo(158, 57);
        context.quadraticCurveTo(160, 47, 187, 48);
        context.moveTo(136, 65);
        context.lineTo(150, 87);
        context.lineTo(148, 92);
        context.lineTo(134, 96);
        context.moveTo(112, 109);
        context.lineTo(160, 110);
        context.quadraticCurveTo(140, 130, 112, 109);
        context.moveTo(121, 110);
        context.lineTo(121, 114);
        context.moveTo(130, 109);
        context.lineTo(129, 118);
        context.moveTo(137, 110);
        context.lineTo(136, 119);
        context.moveTo(145, 110);
        context.lineTo(146, 118);
        context.moveTo(152, 110);
        context.lineTo(152, 116);

        // Fourten
        context.stroke();
        context.closePath();
        let dataToRenurn = {
            url: $canvas.toDataURL("png"),
            err
        }

        return dataToRenurn;
    }
    ImageSixten (Iam = null, fill = null, stroke = null, font = null) {
        const {$canvas} = this;
        // description for user.
        $canvas.dataset.Iam = Iam !== null? Iam : "Student";
        // fill of user
        $canvas.dataset.fill = fill !== null? fill : "white";
        // stroke of user
        $canvas.dataset.stroke = stroke !== null? stroke : "black";
        // font family for user
        $canvas.dataset.font = font !== null? font : "normal";

        let context = undefined;
        $canvas.width = 274;
        $canvas.height = 235;
        let {width, height, dataset} = $canvas,
        err = null;
        
        context = $canvas.getContext("2d");
        context.fillStyle = dataset.fill;
        context.fillRect(0, 0, width, height);

        context.fillStyle = context.strokeStyle = dataset.stroke;
        context.font = `bolder 25px ${dataset.font}`;

        let measure = context.measureText(dataset.Iam);
        if(measure.width > width) {
            dataset.Iam = "Student";
            measure = context.measureText(dataset.Iam);
            err = "la descripcion es muy larga";
        } else err = null;
        context.fillText(dataset.Iam, width/2 - measure.width /2, 180);

        context.lineWidth = 2;
        context.lineJoin = context.lineCap = "round";
        context.arc(137, 71, 59, 0, 6.283185307179586, false);
        context.moveTo(105, 19);
        context.bezierCurveTo(30, 30, 132, 125, 32, 125);
        context.moveTo(110, 17);
        context.bezierCurveTo(355, 15, 113, 126, 253, 126);
        context.moveTo(104, 20);
        context.lineTo(79, 24);
        context.lineTo(59, 37);
        context.lineTo(52, 64);
        context.lineTo(42, 91);
        context.lineTo(32, 119);
        context.moveTo(104, 20);
        context.lineTo(90, 18);
        context.lineTo(71, 18);
        context.lineTo(61, 25);
        context.lineTo(43, 44);
        context.lineTo(31, 62);
        context.lineTo(28, 77);
        context.lineTo(20, 97);
        context.lineTo(15, 110);
        context.lineTo(20, 121);
        context.moveTo(100, 22);
        context.lineTo(98, 14);
        context.lineTo(113, 12);
        context.lineTo(130, 9);
        context.lineTo(150, 13);
        context.lineTo(171, 15);
        context.lineTo(197, 21);
        context.lineTo(207, 39);
        context.lineTo(207, 60);
        context.lineTo(203, 108);
        context.lineTo(214, 121);
        context.moveTo(103, 18);
        context.lineTo(110, 9);
        context.lineTo(137, 2);
        context.lineTo(168, 4);
        context.lineTo(203, 11);
        context.lineTo(230, 19);
        context.lineTo(240, 42);
        context.lineTo(240, 63);
        context.lineTo(233, 84);
        context.lineTo(234, 102);
        context.lineTo(249, 112);
        context.lineTo(263, 131);
        context.moveTo(135, 3);
        context.lineTo(97, 4);
        context.lineTo(58, 16);
        context.lineTo(50, 26);
        context.lineTo(35, 45);
        context.lineTo(28, 64);
        context.lineTo(25, 85);
        context.lineTo(22, 115);
        context.lineTo(19, 123);
        context.moveTo(263, 125);
        context.lineTo(258, 112);
        context.lineTo(258, 82);
        context.lineTo(253, 65);
        context.lineTo(239, 45);
        context.lineTo(225, 17);
        context.lineTo(184, 14);
        context.lineTo(126, 10);
        context.lineTo(88, 12);
        context.lineTo(58, 28);
        context.lineTo(24, 65);
        context.lineTo(29, 94);
        context.lineTo(41, 117);
        context.moveTo(79, 94);
        context.lineTo(81, 106);
        context.lineTo(76, 119);
        context.lineTo(59, 129);
        context.lineTo(64, 124);
        context.lineTo(83, 121);
        context.lineTo(83, 111);
        context.lineTo(83, 110);
        context.moveTo(181, 26);
        context.lineTo(200, 53);
        context.lineTo(198, 72);
        context.lineTo(197, 101);
        context.lineTo(191, 117);
        context.lineTo(197, 126);
        context.lineTo(202, 125);
        context.moveTo(93, 49);
        context.lineTo(89, 57);
        context.lineTo(98, 59);
        context.lineTo(105, 58);
        context.lineTo(108, 57);
        context.lineTo(93, 50);
        context.moveTo(164, 57);
        context.lineTo(183, 53);
        context.lineTo(186, 63);
        context.lineTo(178, 63);
        context.lineTo(170, 61);
        context.lineTo(166, 59);
        context.moveTo(86, 46);
        context.quadraticCurveTo(102, 40, 113, 54);
        context.moveTo(158, 57);
        context.quadraticCurveTo(160, 47, 187, 48);
        context.moveTo(136, 65);
        context.lineTo(150, 87);
        context.lineTo(148, 92);
        context.lineTo(134, 96);
        context.moveTo(112, 109);
        // FiveTen
        context.stroke();
        context.closePath();
        let dataToRenurn = {
            url: $canvas.toDataURL("png"),
            err
        }

        return dataToRenurn;
    }

    ImageSixten (Iam = null, fill = null, stroke = null, font = null) {
        const {$canvas} = this;
        // description for user.
        $canvas.dataset.Iam = Iam !== null? Iam : "Student";
        // fill of user
        $canvas.dataset.fill = fill !== null? fill : "white";
        // stroke of user
        $canvas.dataset.stroke = stroke !== null? stroke : "black";
        // font family for user
        $canvas.dataset.font = font !== null? font : "normal";

        let context = undefined;
        $canvas.width = 274;
        $canvas.height = 235;
        let {width, height, dataset} = $canvas,
        err = null;
        
        context = $canvas.getContext("2d");
        context.fillStyle = dataset.fill;
        context.fillRect(0, 0, width, height);

        context.fillStyle = context.strokeStyle = dataset.stroke;
        context.font = `bolder 25px ${dataset.font}`;

        let measure = context.measureText(dataset.Iam);
        if(measure.width > width) {
            dataset.Iam = "Student";
            measure = context.measureText(dataset.Iam);
            err = "la descripcion es muy larga";
        } else err = null;
        context.fillText(dataset.Iam, width/2 - measure.width /2, 180);

        context.lineWidth = 2;
        context.lineJoin = context.lineCap = "round";
        context.arc(137, 71, 59, 0, 6.283185307179586, false);
        context.moveTo(117, 139);
        context.quadraticCurveTo(60, 138, 73, 103);
        context.moveTo(73, 102);
        context.quadraticCurveTo(53, 2, 136, 5);
        context.moveTo(136, 5);
        context.quadraticCurveTo(235, 2, 201, 109);
        context.moveTo(201, 109);
        context.quadraticCurveTo(211, 145, 152, 139);
        context.lineTo(116, 139);
        context.moveTo(72, 100);
        context.lineTo(73, 106);
        context.moveTo(56, 155);
        context.lineTo(62, 132);
        context.lineTo(75, 142);
        context.lineTo(56, 156);
        context.moveTo(67, 135);
        context.lineTo(72, 127);
        context.moveTo(72, 140);
        context.lineTo(79, 132);
        context.moveTo(65, 129);
        context.lineTo(79, 140);
        context.lineTo(75, 143);
        context.lineTo(61, 132);
        context.lineTo(65, 132);
        context.moveTo(218, 158);
        context.lineTo(199, 146);
        context.lineTo(211, 139);
        context.lineTo(219, 158);
        context.moveTo(193, 135);
        context.lineTo(202, 144);
        context.moveTo(198, 130);
        context.lineTo(206, 142);
        context.moveTo(196, 144);
        context.lineTo(206, 138);
        context.lineTo(211, 139);
        context.lineTo(200, 145);
        context.lineTo(197, 143);
        context.moveTo(93, 44);
        context.quadraticCurveTo(108, 35, 116, 45);
        context.moveTo(162, 48);
        context.quadraticCurveTo(176, 38, 184, 49);
        context.moveTo(139, 48);
        context.lineTo(137, 64);
        context.lineTo(127, 82);
        context.lineTo(137, 89);
        context.moveTo(110, 105);
        context.quadraticCurveTo(136, 135, 161, 106);
        context.moveTo(110, 49);
        context.arc(103, 48, 5, 0, 6.283185307179586, false);
        context.moveTo(179, 51);
        context.arc(174, 53, 5, 0, 6.283185307179586, false);
        context.moveTo(96, 15);

        // Sisxten
        context.stroke();
        context.closePath();
        let dataToRenurn = {
            url: $canvas.toDataURL("png"),
            err
        }

        return dataToRenurn;
    }
    ImageSeventen (Iam = null, fill = null, stroke = null, font = null) {
        const {$canvas} = this;
        // description for user.
        $canvas.dataset.Iam = Iam !== null? Iam : "Student";
        // fill of user
        $canvas.dataset.fill = fill !== null? fill : "white";
        // stroke of user
        $canvas.dataset.stroke = stroke !== null? stroke : "black";
        // font family for user
        $canvas.dataset.font = font !== null? font : "normal";

        let context = undefined;
        $canvas.width = 274;
        $canvas.height = 235;
        let {width, height, dataset} = $canvas,
        err = null;
        
        context = $canvas.getContext("2d");
        context.fillStyle = dataset.fill;
        context.fillRect(0, 0, width, height);

        context.fillStyle = context.strokeStyle = dataset.stroke;
        context.font = `bolder 25px ${dataset.font}`;

        let measure = context.measureText(dataset.Iam);
        if(measure.width > width) {
            dataset.Iam = "Student";
            measure = context.measureText(dataset.Iam);
            err = "la descripcion es muy larga";
        } else err = null;
        context.fillText(dataset.Iam, width/2 - measure.width /2, 180);

        context.lineWidth = 2;
        context.lineJoin = context.lineCap = "round";
        context.arc(137, 71, 59, 0, 6.283185307179586, false);
        context.moveTo(72, 124);
        context.bezierCurveTo(28, 4, 138, 5, 138, 5);
        context.moveTo(137, 6);
        context.quadraticCurveTo(240, 20, 197, 127);
        context.moveTo(209, 144);
        context.quadraticCurveTo(220, 122, 197, 127);
        context.moveTo(209, 144);
        context.quadraticCurveTo(190, 152, 196, 127);
        context.moveTo(195, 128);
        context.quadraticCurveTo(142, 160, 73, 125);
        context.moveTo(55, 145);
        context.quadraticCurveTo(80, 150, 72, 124);
        context.moveTo(54, 145);
        context.quadraticCurveTo(50, 126, 72, 125);
        context.moveTo(93, 50);
        context.moveTo(98, 44);
        context.lineTo(90, 58);
        context.lineTo(113, 56);
        context.lineTo(97, 45);
        context.moveTo(158, 55);
        context.lineTo(175, 47);
        context.lineTo(184, 63);
        context.lineTo(158, 56);
        context.moveTo(90, 41);
        context.quadraticCurveTo(100, 25, 123, 48);
        context.moveTo(149, 46);
        context.quadraticCurveTo(168, 30, 186, 47);
        context.moveTo(137, 63);
        context.lineTo(137, 72);
        context.lineTo(145, 86);
        context.lineTo(131, 91);
        context.moveTo(114, 108);
        context.quadraticCurveTo(124, 135, 157, 109);


        // Seventen
        context.stroke();
        context.closePath();
        let dataToRenurn = {
            url: $canvas.toDataURL("png"),
            err
        }

        return dataToRenurn;
    }
    // Todas las imagenes agrupadas en una funcion de retorno.
    allImages () {
        return {

            one: this.ImageOne, // 1
            two: this.ImageTwo, // 2
            three: this.ImageThree, // 3
            four: this.ImageFour, // 4
            five: this.ImageFive, // 5
            six: this.ImageSix, // 6
            seven: this.ImageSeven, // 7
            eight: this.ImageEight, // 8
            nine: this.ImageNine, // 9
            ten: this.ImageTen, // 10
            eleven: this.ImageEleven, // 11
            twelve: this.ImageTwelve, // 12
            threeten: this.ImageThreeten, // 13
            fourten: this.ImageFourten, // 14
            fiveten: this.ImageFiveten, // 15
            sixten: this.ImageSixten, // 16
            seventen: this.ImageSeventen // 17
        }
    }
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
    static iconURL(isForInterface){
        const $canvas = document.createElement("canvas"), user = localStorage.getItem("@User");
        let color = "";
        if(isForInterface && user) {
            let {theme} = JSON.parse(user);
            color = theme == "light"? "black" : "yellow";
        } else color = "black";
        $canvas.width = 100;
        $canvas.height = 60;
        let context = $canvas.getContext('2d');
        context.strokeStyle = color;
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
    };
    // userThumbnails (local, isAll) {
    //     const allImages = this.allImages();
    //     let {url} = allImages.one.call(this, "Web", "yellow", "black", "monospace");
    //     // let { image } = JSON.parse(local);
    //     // if(image && !isAll)
    //     // console.log(image);
    //     // else {
    //     //     console.log(notImage);
    //     // }
    //     // console.log();
    //     return url;
    // }
    static async setIcon() {
        const $linkIcon = document.getElementById("iconApp");
        $linkIcon.href = FeedbackImage.iconURL(false);
        
        await FeedbackImage.ActionAsync(2000);
        document.title = "FeedBack";
    }
}
