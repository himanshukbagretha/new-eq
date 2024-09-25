(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


    // International carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        items: 1,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

//slider 

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Cloning first and last slide for seamless transition
const slider = document.querySelector('.slider');
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[totalSlides - 1].cloneNode(true);

slider.appendChild(firstClone);  // Clone the first slide at the end
slider.insertBefore(lastClone, slides[0]);  // Clone the last slide at the beginning

// Adjust the initial position to show the first slide properly
currentSlide = 1;
slider.style.transform = `translateX(-${currentSlide * 100}%)`;

// Slide transition logic
function moveSlide(direction) {
  currentSlide += direction;
  slider.style.transition = 'transform 0.5s ease-in-out';
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;

  if (currentSlide >= totalSlides + 1) {
    // If we're at the clone of the first slide, jump back to the real first slide (without animation)
    setTimeout(() => {
      slider.style.transition = 'none';
      currentSlide = 1;
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }, 500); // Timeout matches the slide transition time
  } else if (currentSlide <= 0) {
    // If we're at the clone of the last slide, jump to the real last slide (without animation)
    setTimeout(() => {
      slider.style.transition = 'none';
      currentSlide = totalSlides;
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }, 500);
  }
}

// Automatic slide transition every 5 seconds
function autoSlide() {
  moveSlide(1);
  setTimeout(autoSlide, 5000);
}

// Start the auto-slide after the page loads
window.onload = function() {
  setTimeout(autoSlide, 5000);
};

