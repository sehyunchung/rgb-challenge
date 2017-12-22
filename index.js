function random255() {
  return Math.floor(Math.random() * 256);
}

function randomColor() {
  return `rgb(${random255()}, ${random255()}, ${random255()})`;
}

let stage;
let problem;
let correctAnswer;

// 다음 단계 상태로 전환
function nextStage() {
  stage++;
  problem = [randomColor(), randomColor(), randomColor()];
  correctAnswer = Math.floor(Math.random() * 3);
}

// 화면 그리기
function draw() {
  document.querySelectorAll('.box').forEach((el, index) => {
    el.style.backgroundColor = problem[index];
  });
  document.querySelector('.rgb-text').textContent = problem[correctAnswer];
  document.querySelector('.score').textContent = `score: ${stage}`;
}

// 초기화
function init() {
  stage = 0;
  problem = [randomColor(), randomColor(), randomColor()];
  correctAnswer = Math.floor(Math.random() * 3);
}




// game
document.querySelectorAll('.box').forEach((el, index) => {
  el.addEventListener('click', e => {
    el.classList.add('show');
    if (index === correctAnswer) {
      document.querySelector('.correct').classList.add('show');
      // nextStage();
      // draw();
    } else {
      el.classList.add('show');
      // 재시작
      document.querySelector('.wrong').classList.add('show');
      document.querySelector('.modal-score').textContent = `score: ${stage}`;
      // init();
      // draw();
    }
  });
});

document.querySelector('.correct .modal-button').addEventListener('click', e => {
  nextStage();
  draw();
  document.querySelector('.correct').classList.remove('show');
  document.querySelectorAll('.box').forEach(el => {
    el.classList.remove('show')
  });
});

document.querySelector('.wrong .modal-button').addEventListener('click', e => {
  init();
  draw();
  document.querySelector('.wrong').classList.remove('show');
  document.querySelectorAll('.box').forEach(el => {
    el.classList.remove('show')
  });
});

init();
draw();