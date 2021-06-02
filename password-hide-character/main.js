const character = document.getElementById("character");
const passwordInput = document.getElementById("password");

passwordInput.addEventListener("input", (e) => {
  if (e.target.value.length > 0) {
    character.innerText = "🙈";
  } else {
    character.innerText = "🐵";
  }
});
