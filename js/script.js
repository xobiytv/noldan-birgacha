window.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function() {
      const header = document.querySelector('.hed_top');
      header.classList.toggle('sticky', window.scrollY > 10)
    })
  
    const menuBtn = document.querySelector('.menu_btn')
    const navigation = document.querySelector('.as_navigatir')
    const navigationItems = document.querySelectorAll('.as_navigatir a')
  
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active')
      navigation.classList.toggle('active')
    })
  
   
  })