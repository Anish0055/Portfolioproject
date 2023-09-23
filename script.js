let txt=document.querySelector('.second-text')
let textload=()=>{
    setTimeout(()=>{
      txt.innerHTML=" Developer ";
    },0);
    setTimeout(()=>{
      txt.innerHTML=" Traveller ";
    },4000);
}
textload();
setInterval(textload,8000)

let tablinks=document.getElementsByClassName('tab-links')
 let tabcontents=document.getElementsByClassName('tab-contents')

 function opentab(tabname){
  for (const tablink of tablinks) {
    tablink.classList.remove('active-link')
  }
  for (const tabcontent of tabcontents) {
    tabcontent.classList.remove('active-tab')
  }
   event.currentTarget.classList.add('active-link')
  document.getElementById(tabname).classList.add('active-tab')
  // document.getElementById(tabname).classList.add('active-li')
}




const nav=document.querySelector('.nav')
const openmenu=document.querySelector('.openmenu')
const closemenu=document.querySelector('.closemenu')
openmenu.addEventListener("click",show)
closemenu.addEventListener("click",close)
function show(){
  nav.style.display='flex'
  nav.style.top='0'

}
function close(){
nav.style.top='-100%'

}