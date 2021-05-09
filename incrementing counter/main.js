const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  // const updateCounter = () => {
  //   const target = +counter.getAttribute("data-target");
  //   const c = +counter.innerText;
  //   const increment = target / 200;

  //   if (c < target) {
  //     counter.innerText = `${Math.ceil(c + increment)}`;
  //     setTimeout(updateCounter, 1);
  //   } else {
  //     counter.innerText = target;
  //   }
  // };

  // function updateCounter() {
  //   const target = +counter.getAttribute("data-target");
  //   const c = +counter.innerText;
  //   const increment = target / 200;

  //   if (c < target) {
  //     counter.innerText = `${Math.ceil(c + increment)}`;
  //     setTimeout(updateCounter, 1);
  //   } else {
  //     counter.innerText = target;
  //   }
  // }

  // updateCounter();
  uc(counter);
});

function uc(counter) {
  const target = +counter.getAttribute("data-target");
  const c = +counter.innerText;
  const increment = target / 200;

  if (c < target) {
    counter.innerText = `${Math.ceil(c + increment)}`;
    setTimeout(() => {
      uc(counter);
    }, 1);
  } else {
    counter.innerText = target;
  }
}
