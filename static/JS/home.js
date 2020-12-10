window.onload = function(){
var i =0,text;
text ="Hang Man"
function typing(){
    if(i<text.length){
        document.getElementById("GameTitle").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,100);
    }
}
// Draw a Line
function drawLine(elementID,Start_X,Start_Y,Draw_X,Draw_Y,LineWidth ){
    var c= document.getElementById(elementID);
    var ctx = c.getContext("2d");
    ctx.lineWidth = LineWidth;
    ctx.beginPath();
    ctx.moveTo(Start_X,Start_Y);
    ctx.lineTo(Draw_X,Draw_Y);
    ctx.stroke();    
}

// Hang Man Gallows
function drwaHangMangallows(){
    var c = document.getElementById("HangMan");
    var ctx2 = c.getContext("2d");
    ctx2.lineWidth = 3;
    ctx2.beginPath();
    ctx2.moveTo(180,290);
    ctx2.lineTo(180,3);
    ctx2.moveTo(182,4);
    ctx2.lineTo(100,4);
    ctx2.lineTo(100,40);
    ctx2.moveTo(120,40);
    ctx2.lineTo(80,40);
    ctx2.moveTo(200,149);
    ctx2.lineTo(160,149);
    ctx2.stroke();    
}
// Hang Man Head
function hangManHead(){
    var c = document.getElementById("HangMan")
    var ctx =c.getContext('2d');
    ctx.lineWidth =3
    ctx.beginPath();
    ctx.arc(100, 57, 13, 0, 2 * Math.PI);
    ctx.stroke();
}
// Hang Man Chest
function hangManChest(){
    var elementID= "HangMan";
    drawLine(elementID,100,70,100,110,3);  
}

// Hang Man Left Leg
function hangManLeftLeg(){
    var elementID= "HangMan";
    drawLine(elementID,100,110,80,130,3);
}
// Hang Man Right Leg
function hangManRightLeg(){
    var elementID= "HangMan";
    drawLine(elementID,100,110,120,130,3);
}
// Hang Man Right Arm
function hangManRightArm(){
    var elementID= "HangMan";
    drawLine(elementID,100,85,120,95,3);
}
// Hang Man Left Arm
function hangManLeftArm(){
    var elementID= "HangMan";
    drawLine(elementID,100,85,80,95,3);
}
 function guessRandomWord(){
    document.getElementById("randomWord") .innerHTML ='Hello World'
 }

typing();
setTimeout(drwaHangMangallows,200);
setTimeout(hangManHead,400);
setTimeout(hangManChest,500);
setTimeout(hangManLeftLeg,600);
setTimeout(hangManRightLeg,7000);
setTimeout(hangManRightLeg,800);
setTimeout(hangManLeftArm,900);
setTimeout(hangManRightArm,1000);

}

function guessRandomWord(){
    // Api Call To Python And Get Result
    
    var current_url = window.location;
    document.getElementById("randomWord") .innerHTML ='Random Word Generated'
    // fetch(current_url+"GuessWord"),{
    //     method:"POST"
    //     body:"jasom"
    }
    
    
 }
