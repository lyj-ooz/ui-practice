const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const x = e.clientX; // clicked coord in entire viewport
    const y = e.clientY;
    console.log(x, y);

    const buttonTop = e.target.offsetTop; // button's position
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    button.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 500);
  });
});
