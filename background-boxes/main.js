const boxes = document.querySelectorAll(".box");
boxes.forEach((box, idx) => {
  const x = (idx % 3) * 100;
  const y = Math.floor(idx / 3) * 100;
  box.style.backgroundPosition = `-${x}px -${y}px`;
});
