const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};

refs.btnStart.addEventListener('click', startBtnGenerator);

function startBtnGenerator(event) {
  event.currentTarget.disabled = true;
}
