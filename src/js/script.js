// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1500,
//         slidesToShow: 1,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>',
//         responsive: [
//             {
//               breakpoint: 1024,
//               settings: {
//                 infinite: true,
//                 dots: true,
//                 arrows: false,
//               }
//             }
//             // You can unslick at a given breakpoint now by adding:
//             // settings: "unslick"
//             // instead of a settings object
//           ]
//     });
//   });
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})