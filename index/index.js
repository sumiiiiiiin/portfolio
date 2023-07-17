// 메인 portpolio svg 움직이기
const wave_svg = document.querySelectorAll(div);
$(window).on('scroll', () => {
  wave_svg.forEach(function (div, idx) {
    // console.log(length);
    if (screenY > 10) {
      div.style.strokeDasharray = length;
      div.style.strokeDashoffset = 0;
    } else {
      svg.style.strokeDashoffset = length;
    }
  });
});
// 안돼 왜안돼...계속 안돼..그냥 안돼...

// 버튼 스타일
// $(".hover").mouseleave(
//   function() {
//     $(this).removeClass("hover");
//   }
// );