//Fix tabindex on hidden slides
window.addEventListener("load",e=>{
    let hiddenSlides = document.querySelectorAll(".i-amphtml-carousel-slide-item[aria-hidden='true']")
    let hiddenSlidesLinks = document.querySelectorAll(".i-amphtml-carousel-slide-item[aria-hidden='true'] a")
    hiddenSlides.forEach(function(slide) {
        slide.setAttribute("tabindex", "-1"); 
    });
    hiddenSlidesLinks.forEach(function(slide) {
        slide.setAttribute("tabindex", "-1"); 
    });
})

window.addEventListener("slideChange",e=>{
    let slides = document.querySelectorAll(".i-amphtml-carousel-slide-item")
    let slidesLinks = document.querySelectorAll(".i-amphtml-carousel-slide-item a")
    slides.forEach(function(slide, i) {
        if (i == e.data.index) {
            slide.setAttribute("tabindex", "0"); 
        } else { 
            slide.setAttribute("tabindex", "-1"); 
        }
    });
    slidesLinks.forEach(function(slide, i) {
        if (i == e.data.index) {
            slide.setAttribute("tabindex", "0"); 
        } else { 
            slide.setAttribute("tabindex", "-1"); 
        }
    });
})