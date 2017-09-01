var style = document.getElementsByTagName("div");

for (i = 0; i < style.length ; i++ ){
    style[i].style.backgroundColor = "blue";
}




function clickHandler(){
    
    var variable = document.getElementById("d1").style;
    variable.backgroundColor = "white";

    var style = document.getElementById("d2").style;
    style.backgroundColor = "green";

    var style = document.getElementById("d3").style;
    style.backgroundColor = "red";
}

document.getElementById("btn").onclick = clickHandler;