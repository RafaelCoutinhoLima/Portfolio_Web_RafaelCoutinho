const btnvoltar = document.getElementById("voltar");
if (btnvoltar){
  btnvoltar.addEventListener("click", function () {
  window.location.href = "index.html";
})
}
const btngit = document.getElementById("git");
if (btngit) {
  btngit.addEventListener("click", function () {
  window.open("https://github.com/RafaelCoutinhoLima/ARDUINO_projeto","blank_");
  });
}
const btnconhecer=document.getElementById("conhecer");
if(btnconhecer){
  btnconhecer.addEventListener('click',function(){
    window.location.href="sobre.html"
})
}
