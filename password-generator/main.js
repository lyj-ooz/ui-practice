const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const resultcopyEl = document.getElementById("result-copy");

const generateBtn = document.getElementById("generate");
const clipboardBtn = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardBtn.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();

  resultcopyEl.style.visibility = "visible";
  setTimeout(() => {
    resultcopyEl.style.visibility = "hidden";
    resultEl.innerText = "";
  }, 600);
});

generateBtn.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";

  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (type) => {
      // 각 object의 '값'만 추출한다.
      // return Object.values(type)[0] === true;
      return Object.values(type)[0];
    }
  );

  if (typesCount === 0) {
    return "";
  }

  // for (let i = 0; i < length; i += typesCount) {
  //   typesArr.forEach((type) => {
  //     const funcName = Object.keys(type)[0];
  //     generatedPassword += randomFunc[funcName]();
  //   });
  // }

  for (let i = 0; i < length; i++) {
    let randomType = typesArr[Math.floor(Math.random() * typesArr.length)];
    const funcName = Object.keys(randomType)[0];
    generatedPassword += randomFunc[funcName]();
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

function getRandomLower() {
  // ASCII 코드 사용
  // 97: a
  // 98: b ...
  // 알파벳 26자 중에서 랜덤으로 얻으려고
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  // ASCII 코드 사용
  // 65: A
  // 66: B ...
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  // ASCII 코드 사용
  // 48: 0
  // 49: 1 ...
  // 숫자는 0~9까지 10개 중에서 랜덤으로 얻으려고
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*()-[]<>=~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
