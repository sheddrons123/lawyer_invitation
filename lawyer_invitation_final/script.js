
document.addEventListener('DOMContentLoaded', function () {

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
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


  // 지도 초기화
  const container = document.getElementById('map');
  if (container) {
    const options = {
      center: new kakao.maps.LatLng(37.501114, 127.011597),
      level: 5
    };

    const map = new kakao.maps.Map(container, options);
    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(37.501114, 127.011597)
    });
    marker.setMap(map);
  }
});
