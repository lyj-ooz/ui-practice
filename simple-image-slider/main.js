const sliderImages = document.querySelectorAll(".slider-image");
const leftBtn = document.querySelector(".left-arrow");
const rightBtn = document.querySelector(".right-arrow");

let showSliderNum = 0;
sliderImages[showSliderNum].classList.add("active");

rightBtn.addEventListener("click", () => {
  showSliderNum++;

  if (showSliderNum > sliderImages.length - 1) {
    showSliderNum = 0;
  }

  // sliderImages.forEach((sliderImage) => {
  //   sliderImage.classList.remove("active");
  // });
  // sliderImages[showSliderNum].classList.add("active");
  toggleActiveSlide();
});

leftBtn.addEventListener("click", () => {
  showSliderNum--;

  if (showSliderNum < 0) {
    showSliderNum = sliderImages.length - 1;
  }

  // sliderImages.forEach((sliderImage) => {
  //   sliderImage.classList.remove("active");
  // });
  // sliderImages[showSliderNum].classList.add("active");
  toggleActiveSlide();
});

function toggleActiveSlide() {
  sliderImages.forEach((sliderImage) => {
    sliderImage.classList.remove("active");
  });
  sliderImages[showSliderNum].classList.add("active");
}
