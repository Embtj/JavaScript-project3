const kittens = ["img/kitten1.jpg", //The images for the slideshow
"img/kitten2.jpg",
"img/kitten3.jpg",
"img/kitten4.jpg"];

const slideshow = document.querySelector('.slideshow');
const slide1 = document.createElement('DIV');
slideshow.appendChild(slide1);
const slide2 = document.createElement('DIV');
slideshow.appendChild(slide2);
slide1.style.backgroundImage = `url('${kittens[0]}')`;

setTimeout(()=>{
  slide1.style.opacity = 1;
}, 1);                          // After 1 ms the image in the back will start showing 

let currentSlide = 1;   
nextSlide();            // Starts the slideshow

// After 7 seconds the 2 images are put together to the same image and slide 2 is shown. When slide 2 is completely visible the next image will be shown.
function nextSlide() {
  setTimeout(()=>{
    slide2.style.backgroundImage = slide1.style.backgroundImage;
    slide2.style.opacity = 1;
  }, 7000); // After 7 seconds the same image is put in the front as in the back. 
}

slide2.addEventListener('transitionend', e=>{ // When slide 2 is completely visible or invisible
  if (slide2.style.backgroundImage==slide1.style.backgroundImage) { //When the first image is shown
    slide1.style.backgroundImage = `url('${kittens[currentSlide]}')`;//Switch to the one in the back
    slide2.style.opacity = 0;                                       //The image in the front is invisible and the image in the back shows
    currentSlide++;     //Go to the next image
    currentSlide = currentSlide%kittens.length; // If it's at the end it goes to the beginning.
    nextSlide();        //After 7 seconds it switches to a new image
  }
})

