// window.addEventListener('DOMContentLoaded', function () {
//     window.addEventListener('scroll', function() {
//       const header = document.querySelector('.hed_top');
//       header.classList.toggle('sticky', window.scrollY > 10)
//     })
  
//     const menuBtn = document.querySelector('.menu_btn')
//     const navigation = document.querySelector('.as_navigatir')
//     const navigationItems = document.querySelectorAll('.as_navigatir a')
  
//     menuBtn.addEventListener('click', () => {
//       menuBtn.classList.toggle('active')
//       navigation.classList.toggle('active')
//     })
  
   
//   })

var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });