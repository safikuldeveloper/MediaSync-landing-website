/**
* Template Name: ImmersoX - VR Solutions & Bootstrap Landing Page Template
* Template URL: https://www.templaterise.com/template/immersox-vr-solutions-bootstrap-landing-page-template
* Updated: February 01 2025 with Bootstrap v5.3.3
* Author: templaterise.com
*/

$(document).ready(function(){

  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navbarClose = document.querySelector('.navbar-close');

  function toggleBodyScroll(disable) {
      document.body.style.overflow = disable ? 'hidden' : '';
  }

  function hideNavbarToggler() {
      navbarToggler.classList.add('hide');
  }

  function showNavbarToggler() {
      navbarToggler.classList.remove('hide');
  }

  navbarCollapse.addEventListener('show.bs.collapse', function() {
      toggleBodyScroll(true);
      hideNavbarToggler();
  });

  navbarCollapse.addEventListener('hide.bs.collapse', function() {
      toggleBodyScroll(false);
      showNavbarToggler();
  });


  navbarClose.addEventListener('click', () => {
      bootstrap.Collapse.getInstance(navbarCollapse).hide();
  });

  $('.testimonial-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    responsive:{
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
});



});