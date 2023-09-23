let cconatiner=(document.getElementsByClassName('content-container'))

for (let i = 0; i <cconatiner.length ; i++) {
    cconatiner[i].addEventListener('click', function(){
        cconatiner[i].classList.toggle('active')
    })
    
}