window.addEventListener("scroll",()=>{
    let content = document.querySelector('.section-2')
    let contentPosition = content.getBoundingClientRect().top
    let screenPosition = window.innerHeight;
if(contentPosition > screenPosition){
    content.classList.add(".active")
}else{
    content.classList.remove('.active')
}

})