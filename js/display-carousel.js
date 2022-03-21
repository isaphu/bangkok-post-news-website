let slideIndex = 0;

displayCarousel();

//function modified from sourced
//https://www.w3schools.com/howto/howto_js_slideshow.asp
//modified function now factors in browser size, and displays multiple product cards on dekstop
function displayCarousel() {
  let i;
  let slides = document.getElementsByClassName("recommend-storie_card");
  if (document.body.clientWidth >= 800) {
    for (i = 0; i < slides.length - 2; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    //loop the carousel
    if (slideIndex > slides.length - 2) {
      slides[slideIndex].style.display = "none";
      slides[slideIndex - 1].style.display = "none";
      slideIndex = 1;
    }
    //show 3 images in carousel on desktop
    slides[slideIndex - 1].style.display = "inline-block";
    slides[slideIndex].style.display = "inline-block";
    slides[slideIndex + 1].style.display = "inline-block";
    setTimeout(displayCarousel, 3000); // Change image every 3 seconds
  } else {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    //show 1 image on mobile
    slides[slideIndex - 1].style.display = "block";
    setTimeout(displayCarousel, 3000); // Change image every 2 seconds
  }
}
