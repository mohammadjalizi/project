const list=document.querySelector('.NAVBAR')
const menu=document.getElementById('menu')
console.log(menu,list)


menu.addEventListener("click",()=>{

list.classList.toggle("visible")


})