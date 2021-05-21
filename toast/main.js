const btn = document.querySelector(".btn");
const toasts = document.querySelector(".toasts");

btn.addEventListener("click", () => showToast("yay!!!"));

function showToast(message) {
  const div = document.createElement("div");
  div.classList.add("toast");
  div.innerHTML = `
    <span>${message}</span>
    <div class="line"></div>
  `;
  toasts.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 2200);
}
