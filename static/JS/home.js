window.onload = function(){
var i =0,text;
text ="Welcome \n To\n Hang Man"
function typing(){
    if(i<text.length){
        document.getElementById("GameTitle").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,50)
    }
}
typing();
}