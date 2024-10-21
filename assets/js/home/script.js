"use script";
// ? Search Modal
let searchButtons = document.getElementsByClassName("Searchmodal");
let modal__items = document.getElementsByClassName("SearchModal__main");
let modal = false;

for (let i = 0; i < searchButtons.length; i++) {
    searchButtons[i].addEventListener('click', searchModal);
}
function searchModal() {
    modal = !modal;
    for (let i = 0; i < modal__items.length; i++) {
        modal__items[i].classList.toggle('open');
    }
}

// ? Header Scroll
window.onscroll = function() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var element = document.querySelector(".header"); 
  
    if (scrollPosition > 90) {
      element.classList.add("scrolled-down");
      element.classList.remove("scrolled-up");
    } else {
      element.classList.add("scrolled-up");
      element.classList.remove("scrolled-down");
    }
  };
  

// ? Scroll To Top

$(document).ready(function() {
   
    $(window).scroll(function() {
       
        if ($(this).scrollTop() > 100) {
            $('.ScrollTop').removeClass('d-none');
        } else {
            $('.ScrollTop').addClass('d-none'); 
        }
    });

   
    $('.ScrollTop').click(function() {
        $('html, body').animate({scrollTop: 0}, 'slow'); 
        return false; 
    });
});



// slick slider
$(document).ready(function(){
    $('#slider-area').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: true
    });
});

// slick slider 2
$(document).ready(function() {
    $('#SaleOffCarusel').slick({
        slidesToShow: 5, // 1200 ve üzeri için
        slidesToScroll: 1,
        arrow:false,
        responsive: [
            {
                breakpoint: 1200, // 1200 piksel ve altı için
                settings: {
                    slidesToShow: 4 // 4 slayt göster
                }
            },
            {
                breakpoint: 900, // 800 piksel ve altı için
                settings: {
                    slidesToShow: 3 // 3 slayt göster
                }
            },
            {
                breakpoint: 600, // 500 piksel ve altı için
                settings: {
                    slidesToShow: 2 // 2 slayt göster
                }
            },
            {
                breakpoint: 350, // 320 piksel ve altı için
                settings: {
                    slidesToShow: 1 // 1 slayt göster
                }
            }
        ]
    });
});

$(document).ready(function() {
    $('#OurBlogPostsCarusel').slick({
        slidesToShow: 3, 
        slidesToScroll: 1,
        arrow:false,    
        responsive: [
            {
                breakpoint: 900, // 800 piksel ve altı için
                settings: {
                    slidesToShow: 2 // 3 slayt göster
                }
            },
            {
                breakpoint: 350, // 320 piksel ve altı için
                settings: {
                    slidesToShow: 1 ,// 1 slayt göster
                    arrow: false
                
                }
            }
        ]
    });
});

