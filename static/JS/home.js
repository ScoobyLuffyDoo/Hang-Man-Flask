window.onload = function(){
var i =0,text;
text ="Hang Man"
function typing(){
    if(i<text.length){
        document.getElementById("GameTitle").innerHTML += text.charAt(i);
        i++;
                setTimeout(typing,100)
    }
}

function drwaHangMangallows(){
    var c = document.getElementById("HangMan");
    var ctx = c.getContext("2d");
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
    ctx2.stroke()    
    
}
typing();
drwaHangMangallows();
}