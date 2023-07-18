// 스크롤에 따른 nav 변화

//스크롤시 헤더바 변경 230629 scrollY 또는 230630 scrollEx4 참고하여 해보기

  $(window).on('scroll', () => {
    // console.log(scrollY);
    if (scrollY > 200) {
      $('header').css({
        width:'80%',
        borderRadius:'25px',
        margin:'0 auto',
        opacity: 1,
      });
    } else {
      $('header').css({
        width:'100%',   
        opacity: 1,
        borderRadius:'0',
        // marginTop:'1vw'
    
      });
    }
  });

  // 햄버거버튼
  $(document).ready(function () {
    $('.ham_btn').on('click', (e) => {
      e.preventDefault();
      $('.menu_wrapper_list').slideToggle();
      $('.menu_wrapper_list').toggleClass('hide');
    });
  });

  // aos js
  AOS.init();

  
