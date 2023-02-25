const button=document.querySelector('.button');
const nav=document.querySelector('.nav');


button.addEventListener('click',()=>{
    nav.classList.toggle('activo');
});


const li1=document.querySelector('.li1');
li1.addEventListener('click',()=>{
    nav.classList.toggle('activo');
});
const li2=document.querySelector('.li2');
li2.addEventListener('click',()=>{
    nav.classList.toggle('activo');
});
const li3=document.querySelector('.li3');
li3.addEventListener('click',()=>{
    nav.classList.toggle('activo');
});
const li4=document.querySelector('.li4');
li4.addEventListener('click',()=>{
    nav.classList.toggle('activo');
});
const li5=document.querySelector('.li5');
li5.addEventListener('click',()=>{
    nav.classList.toggle('activo');
});
const li6=document.querySelector('.li6');
li6.addEventListener('click',()=>{
    nav.classList.toggle('activo');
});

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50.5,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

