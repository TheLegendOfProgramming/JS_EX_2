function clickHandler(e){
   var div = e.target;
   
    console.log("hi from " + div.id);
    document.getElementById("text").innerHTML = ("hi from " + div.id);
}





document.getElementById("outer").onclick = clickHandler;
