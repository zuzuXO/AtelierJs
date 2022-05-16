
btn.addEventListener("click",()=>{
    var name=document.querySelector("#name").textContent;
    var list=document.querySelector("ul");
    var task=document.createAttribute("li");
var btn=document.querySelector("btn");
    task.textContent=name;

    console.log(name);
})