const lis = document.querySelectorAll("ul li");

lis.forEach((li) => {
  li.addEventListener("click", () => {
    removeActive();
    li.classList.add("active");
  });
});

function removeActive() {
  lis.forEach((li) => {
    li.classList.remove("active");
  });
}

// 또는 event delegation 방식으로..
const nav = document.querySelector("nav");
nav.addEventListener("click", (e) => {
  removeActive();
  if (e.target.nodeName === "LI") {
    e.target.classList.add("active");
  }
});
