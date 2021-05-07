const input = document.querySelector("input");
const tags = document.querySelector(".tags");

input.focus();

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    if (e.target.value.trim() === "") return;
    const tag = spanEl(e.target.value);
    tags.appendChild(tag);
    input.value = "";
  }
});

function spanEl(txt) {
  const span = document.createElement("span");
  span.classList.add("tag");
  span.innerText = txt;

  return span;
}
