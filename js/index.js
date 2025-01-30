const details = document.querySelectorAll(".state-details");


function showDetails(index) {
    details.forEach((detail, idx) => {
        if (idx === index) {
            detail.classList.remove("d-none");
        } else {
            detail.classList.add("d-none");
        }
    });
}


document.querySelector("#location-1").addEventListener("click", () => showDetails(0));
document.querySelector("#location-2").addEventListener("click", () => showDetails(1));
document.querySelector("#location-3").addEventListener("click", () => showDetails(2));
document.querySelector("#location-4").addEventListener("click", () => showDetails(3));
document.querySelector("#location-5").addEventListener("click", () => showDetails(4));
document.querySelector("#location-6").addEventListener("click", () => showDetails(5));


//carousel js
$(".brand-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2
      },
      576: {
        items: 4
      },
      768: {
        items: 4
      },
      992: {
        items: 4
      },
      1200: {
        items: 4
      }
    }
  });


    // Roadmap carousel
    $(".roadmap-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      margin: 25,
      loop: true,
      dots: false,
      nav: true,
      navText : [
          '<i class="bi bi-chevron-left"></i>',
          '<i class="bi bi-chevron-right"></i>'
      ],
      responsive: {
          0:{
              items:1
          },
          576:{
              items:2
          },
          768:{
              items:3
          },
          992:{
              items:4
          },
          1200:{
              items:5
          }
      }
  });



  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
        '<i class="fa fa-angle-right"></i>',
        '<i class="fa fa-angle-left"></i>'
    ],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
});




$(".award-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
        '<i class="fa fa-angle-right"></i>',
        '<i class="fa fa-angle-left"></i>'
    ],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
});
