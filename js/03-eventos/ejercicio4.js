function displayGallery(){
    document.getElementById('carousel').style.display = 'inline';
}

const buttons = document.querySelectorAll('[data-carousel-button]');

buttons.forEach(button =>{
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest('[data-carousel]').querySelector('[data-slides]');
        const activeSlide = slides.querySelector('[data-active]');
        let newIndex = [...slides.children].indexOf(activeSlide) + offset; 
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active
    })
})

document.addEventListener("keyup", function(event){
    if (event.keyCode === 27){ 
        document.getElementById('carousel').style.display = 'none';
    } else return;
});