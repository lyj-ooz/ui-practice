const heading1 = document.getElementById("text");

let text = "漂洋过海来看你...";
let idx = 0;

function typeText() {
  heading1.innerText = text.slice(0, idx);
  idx += 1;
  console.log(idx);

  if (idx > text.length) {
    idx = 0;
    // return;
  }

  setTimeout(typeText, 290);
}

typeText();
