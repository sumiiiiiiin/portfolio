// aos
AOS.init();

// 메인 portpolio svg 움직이기
$(document).ready(function() {
    var paths = $(".portfolio-svg path");
    var animationDuration = 100; // 애니메이션 지속 시간 (밀리초)
    var animationDelay = 100;    // 각 path 간의 딜레이 (밀리초)
    
    paths.each(function(index) {
        var path = $(this);
        setTimeout(function() {
            path.css("transform", "scale(1.2)");
            setTimeout(function() {
                path.css("transform", "scale(1)");
            }, animationDuration);
        }, index * (animationDuration + animationDelay));
    });
});


