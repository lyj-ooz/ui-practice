const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const delBtn = document.getElementById("clear");
const sizeSpan = document.getElementById("size");
const colorInput = document.getElementById("color");

let size = sizeSpan.textContent;
let isPressed = false;
let color = "#000";
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX; // where user clicked
  y = e.offsetY; // where user clicked
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

decreaseBtn.addEventListener("click", () => {
  size = parseInt(sizeSpan.textContent);
  if (size <= 1) return;
  size -= 1;
  sizeSpan.textContent = size;
});

increaseBtn.addEventListener("click", () => {
  size = parseInt(sizeSpan.textContent);
  if (size >= 20) return;
  size += 1;
  sizeSpan.textContent = size;
});

colorInput.addEventListener("input", (e) => {
  color = e.target.value;
});

delBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
