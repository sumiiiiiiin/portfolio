// 카테고리 호버시 색상 차오르기
/*
$('.category-txt').mouseenter(function(){
    $(this).addClass('hoverBg').removeClass('hoverAfter');
}).mouseleave(function(){
     $(this).removeClass('hoverBg').addClass('hoverAfter');
});*/

const introText = document.querySelectorAll('.category li:last-child');

window.onload = () => {
  let timer = 100;
  introText.forEach((item) => {
    item.style.animation = `fade 500ms ${(timer += 50)}ms forwards`;
  });
};
