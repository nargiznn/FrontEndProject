"use script";
let searchButtons = document.getElementsByClassName("Searchmodal");
let modal__items = document.getElementsByClassName("SearchModal__main");
let modal = false;

for (let i = 0; i < searchButtons.length; i++) {
    searchButtons[i].addEventListener('click', searchModal);
}

function searchModal() {
    modal = !modal;
    console.log(modal);

    // Tüm modal__items üzerinde döngü kurarak 'open' class'ını ekleyip çıkar
    for (let i = 0; i < modal__items.length; i++) {
        modal__items[i].classList.toggle('open');
    }
}




let rightIcon=document.querySelector("#slider-area .slider .icons .right");
let leftIcon=document.querySelector("#slider-area .slider .icons .left");
function rightSlider() {
    let activeImage=document.querySelector(".active-img");
    if(activeImage.nextElementSibling!=null){
        activeImage.classList.remove("active-img"); 
        activeImage.nextElementSibling.classList.add("active-img")
    }
    else{
        activeImage.classList.remove("active-img"); 
        activeImage.parentNode.firstElementChild.classList.add("active-img")
    }
    
}
rightIcon.addEventListener("click",function(){
    rightSlider();
})

leftIcon.addEventListener("click",function(){
    let activeImage=document.querySelector(".active-img");
    if(activeImage.previousElementSibling!=null){
        activeImage.classList.remove("active-img"); 
        activeImage.previousElementSibling.classList.add("active-img")
    }
    else{
        activeImage.classList.remove("active-img"); 
        activeImage.parentNode.lastElementChild.classList.add("active-img")
    }

})

setInterval(() => {
    rightSlider();
}, 2000);



