// 스크롤에 따른 nav 변화
$(window).on('scroll', () => {
    const slideBox = $('#slide_box').offset().top;
    console.log(slideBox);
  
    if (scrollY > slideBox) {
      $('.posco-nav').addClass('active');
      $('#global_nav').css({ top: 80 });
    } else {
      $('.posco-nav').removeClass('active');
      $('#global_nav').css({ top: 150 });
    }
  });
  

//스크롤시 헤더바 변경 230629 scrollY 또는 230630 scrollEx4 참고하여 해보기

// 브랜드 로고 클릭시 로고가 바뀜
$('.posco-asia-img li').on('click', (evt) => {
    const target = $(evt.target);
    // const imgSrc = target.attr('src'); // 내가 클릭한 그 li의 src 속성을 가져와라 
    // const imgAlt = target.attr('alt');

    $('.posco-asia-img').attr({ src: imgSrc, alt: imgAlt });

});
