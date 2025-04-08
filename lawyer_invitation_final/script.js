
document.addEventListener('DOMContentLoaded', function () {

function setRealViewportHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('resize', setRealViewportHeight);
setRealViewportHeight();

  
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
let currentSlide = 0;

function updateSlide() {
  document.querySelector(".slider").style.transform = `translateX(-${currentSlide * 100}%)`;
  updateButtons();
}

function updateButtons() {
  prevBtn.style.opacity = currentSlide === 0 ? "0" : "0.7";
  nextBtn.style.opacity = currentSlide === slides.length - 1 ? "0" : "0.7";
}

prevBtn.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlide();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateSlide();
  }
});

updateSlide();  // 초기 슬라이드와 버튼 상태 설정

  let startX = 0;
  let endX = 0;

  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    const threshold = 50; // 최소 스와이프 거리
    const deltaX = endX - startX;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0 && currentSlide > 0) {
        currentSlide--;
      } else if (deltaX < 0 && currentSlide < slides.length - 1) {
        currentSlide++;
      }
      updateSlide();
    }
  }

  // 지도 초기화
  const container = document.getElementById('map');
  if (container) {
    const options = {
      center: new kakao.maps.LatLng(37.501114, 127.011597),
      level: 6
    };

    const map = new kakao.maps.Map(container, options);
    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(37.501114, 127.011597)
    });
    marker.setMap(map);
  }
});
