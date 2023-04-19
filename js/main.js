var swiper = new Swiper(".mySwiper", {
    // effect: 'coverflow',
    //           grabCursor: true,
    //           centeredSlides: true,
    //           slidesPerView: 'auto',
    //           loop: true,
    //           coverflowEffect: {
    //               rotate: 0,
    //               stretch: -50,
    //               depth: 100,
    //               modifier: 2,
    //               slideShadows: true,
    //           },
    slidesPerView: 3,
    spaceBetween: -30,
        
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      
    });

    var swiperr = new Swiper-2(".mySwiper-2", {
      // effect: 'coverflow',
      //           grabCursor: true,
      //           centeredSlides: true,
      //           slidesPerView: 'auto',
      //           loop: true,
      //           coverflowEffect: {
      //               rotate: 0,
      //               stretch: -50,
      //               depth: 100,
      //               modifier: 2,
      //               slideShadows: true,
      //           },
     
      spaceBetween: 30,
          
      pagination: {
          el: ".swiper-pagination-2",
          clickable: true,
        },
        
      });