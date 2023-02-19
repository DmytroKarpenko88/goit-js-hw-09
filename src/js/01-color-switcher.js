const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

console.log(getRandomHexColor());

refs.btnStart.addEventListener('click', startBtnGenerator);

function bodyColorChange() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

function startBtnGenerator(event) {
  event.currentTarget.disabled = true;
  // refs.body.style.backgroundColor = getRandomHexColor();

  timerId = setInterval(bodyColorChange, 1000);
}

refs.btnStop.addEventListener('click', stopBtnGenerator);

function stopBtnGenerator() {
  clearInterval(timerId);
  refs.btnStart.disabled = false;
}
