// menu
$('.lnb > ul > li').mouseover(function(){
  $('.menu').stop().slideDown(300);
});
$('.lnb > ul > li').mouseleave(function(){
  $('.menu').stop().slideUp(300);
});
// Slide Show: .reccomend-slide
let slides = document.querySelector('.slides');
let slideImg = document.querySelectorAll('.slides li');
currentIndex = 0;
count = slideImg.length;
prev = document.querySelector('.prev');
next = document.querySelector('.next');
slideWidth = 300;
slideMargin = 110;
getCopy();
init();
function getCopy() {
  let cloneSlide_first = slideImg[0].cloneNode(true);
  let cloneSlide_last = slides.lastElementChild.cloneNode(true);
  slides.append(cloneSlide_first);
  slides.insertBefore(cloneSlide_last, slides.firstElementChild);
}
function init() {
  slides.style.width = (slideWidth + slideMargin) * (count + 2) + 'px';
  slides.style.left = -(slideWidth + slideMargin) + 'px';
}
next.addEventListener('click', function () {
  if (currentIndex <= count - 1) {
    slides.style.left = -(currentIndex + 2) * (slideWidth + slideMargin) + 'px';
    slides.style.transition = `${0.5}s ease-out`;
  }
  if (currentIndex === count - 1) {
    setTimeout(function () {
      slides.style.left = -(slideWidth + slideMargin) + 'px';
      slides.style.transition = `${0}s ease-out`;
    }, 500);
    currentIndex = -1;
  }
  currentIndex += 1;
});
prev.addEventListener('click', function () {
  console.log(currentIndex);
  if (currentIndex >= 0) {
    slides.style.left = -currentIndex * (slideWidth + slideMargin) + 'px';
    slides.style.transition = `${0.5}s ease-out`;
  }
  if (currentIndex === 0) {
    setTimeout(function () {
      slides.style.left = -count * (slideWidth + slideMargin) + 'px';
      slides.style.transition = `${0}s ease-out`;
    }, 500);
    currentIndex = count;
  }
  currentIndex -= 1;
});
// .faimily-site
$('p .btn-site').click(function(){
  $('.site-box').slideToggle(100);
});