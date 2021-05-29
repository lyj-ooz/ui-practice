const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const pauseBtn = document.getElementById("pause");
const img = document.querySelectorAll("#imgs img");

let idx = 0;
let isPause = false;
let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

rightBtn.addEventListener("click", () => {
  idx++;
  changeImage();
  if (!isPause) {
    resetInterval();
  }
});

leftBtn.addEventListener("click", () => {
  idx--;
  changeImage();
  if (!isPause) {
    resetInterval();
  }
});

pauseBtn.addEventListener("click", () => {
  if (!isPause) {
    clearInterval(interval);
    isPause = true;
    pauseBtn.innerText = "Resume";
  } else {
    resetInterval();
    isPause = false;
    pauseBtn.innerText = "Pause";
  }
});
