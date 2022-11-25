const list=document.getElementById('list')
const menu=document.getElementById('menu')
console.log(menu,list)
alert()

menu.addEventListener("click",()=>{

list.classList.toggle('active')


})