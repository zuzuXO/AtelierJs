var text=document.querySelector("#text");
var Mystyle=document.querySelector("#Mystyle");
Mystyle.addEventListener("mouseover",(e)=>{
    if(e.target.id=="color") {text.style["color"]=e.target.value}
    else if (e.target.id=="size") {text.style["font-size"]=e.target.value+"px"}
    else if (e.target.id=="font-families") {text.style["font-family"]=e.target.value}
})
