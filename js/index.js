document.querySelectorAll('.placasSection-slideshow-container').forEach(container => {
    let slideIndex = 0;
    const slides = container.getElementsByClassName("slide");
    showSlides(slides, slideIndex);

    function showSlides(slides, index) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        index++;
        if (index > slides.length) { index = 1 }    
        slides[index - 1].style.display = "block";  
        setTimeout(() => showSlides(slides, index), 3000); // Change image every 3 seconds
    }
});


document.querySelectorAll('.image-slider').forEach(slider => {
    let slideIndex = 0;
    const slides = slider.getElementsByClassName("slideCompetencia");
    showSlides(slides, slideIndex);

    function showSlides(slides, index) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        index++;
        if (index > slides.length) { index = 1 }    
        slides[index - 1].style.display = "block";  
        setTimeout(() => showSlides(slides, index), 3000); // Change image every 3 seconds
    }
});
