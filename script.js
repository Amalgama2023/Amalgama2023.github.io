/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello, world!");

var loader=document.querySelector('.loader');

console.log(loader);
window.addEventListener("ready",vanish);

function vanish(){
  loader.classList.add("disppear")
  
}
  


var swiper =new Swiper(".mySwiper",{
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 15 ,
    strech: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
 loop:true,
  
});

var swiper = new Swiper(".myCards", {
      effect: "cards",
      grabCursor: true,
    });