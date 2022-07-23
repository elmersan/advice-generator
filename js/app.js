const loader = document.querySelector("#loader");
loader.style.display = "none";

const dice = document.querySelector(".dice");
const title = document.querySelector("#title");
const advice_text = document.querySelector("#advice_text");
const dice_icon = document.getElementById("dice-icon");

dice.addEventListener("click", () => {
  dice_icon.classList.add("animate");
  setTimeout(() => {
    getData();
    dice_icon.classList.remove("animate");
  }, 2000);
});

async function getData() {
  const resp = await fetch("https://api.adviceslip.com/advice");
  const advice_data = await resp.json();
  title.innerHTML = `Advice #${advice_data.slip.id}`;
  advice_text.innerHTML = `"${advice_data.slip.advice}"`;
}
getData();

window.addEventListener("load", () => {});
