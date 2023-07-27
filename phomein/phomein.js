//AOS
AOS.init();

function handleScroll() {
  const header = document.querySelector('header');

  if (window.scrollY > 150) {
    header.style.height = '10vh';
    header.style.lineHeight = '8vh';
    header.style.margin = '0 auto';
  } else {
    header.style.height = '17vh';
    header.style.lineHeight = 'initial';
    header.style.margin = 'initial';
  }
}
// // 스크롤 이벤트를 감지하여 핸들러 함수 호출
window.addEventListener('scroll', handleScroll);




// JavaScript 코드
