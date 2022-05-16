const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
var villes=document.querySelectorAll("li");
for(let i=0;i<villes.length;i++){console.log(villes[i].textContent)}
villes.forEach((el) => {
    el.addEventListener("click",(el)=>{
        var col="#";
        for(let i=0;i<6;i++){
            col+=hex[getrandomnumber()];
            console.log(col)
        }
        el.target.style["color"]=col;
    })
});
function getrandomnumber(){
    return Math.floor(Math.random()*16);
}