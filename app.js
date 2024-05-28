let user = document.querySelector("#users");
user.addEventListener("change",function(){
    console.log("input changed");
    console.log("final value = ",this.value);
})
let pass = document.querySelector("#passes");
pass.addEventListener("change",function(){
    console.log("input changed");
    console.log("final value = ",this.value);
})

let btn = document.querySelector(".log");
btn.addEventListener("click",function(){
    console.log(user.value = "",pass.value ="");
})