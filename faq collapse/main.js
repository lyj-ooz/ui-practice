const buttons = document.querySelectorAll(".faq-toggle");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.parentElement);
    console.log(btn.parentNode);
    btn.parentNode.classList.toggle("active");
  });
});
