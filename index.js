const btnToggler = document.getElementById("btnToggler");
const btnMenu = document.getElementById("btnMenu");
const btnClose =document.getElementById("btnClose");
btnToggler.addEventListener('click', ()=>{
  btnMenu.classList.toggle("d-none");
  btnClose.classList.toggle("d-none");
})