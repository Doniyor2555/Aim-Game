const startBtn = document.querySelector(".start"),
      screens = document.querySelectorAll(".screen"),
      timeList = document.querySelector("#time_list"),
      timeEl = document.querySelector("#time"),
      board = document.querySelector("#board");

let time = 1; 
let score = 0;

startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  screens[0].classList.add("up");
});

  timeList.addEventListener("click", (e) => {
    if(e.target.classList.contains("time-btn")){
      time = parseInt(e.target.getAttribute("data-timeId"));
      startGame();
    }
  });



board.addEventListener("click", (e) => {
  if(e.target.classList.contains("circle")){
    score++;
    e.target.remove();
    createRandomCircle();
  }
});


function startGame(){
  setInterval(decreaseTime, 1000);
  timeEl.innerHTML = `00:${time}`;
  screens[1].classList.add("up");
  setTime(time);  
  createRandomCircle();
  getRandomColor();
}


function decreaseTime(){
  if(time === 0){
    finishGame();
  } else{
    let current = --time;
    if(current < 10){
      current = `0${current}`;
    }
    timeEl.innerHTML = `00:${current}`;
    setTime(current);
  }
}

function setTime(value){
  timeEl.innerHTML = `00:${value}`;
}






function finishGame(){
  timeEl.parentNode.classList.add("hide");
  board.innerHTML = `<h1>Счет: <span class="primary"> ${score}</h1></span>`;
}
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#7FFFD4', '#8A2BE2', "#00008B", "#2F4F4F", "#4B0082", "#6A5ACD", '#BDB76B', "#BDB76B", " #F0E68C", "#EEE8AA", "#FFDAB9", "#FFE4B5", "#FFEFD5", "#FFFF00", "	#FFD700", "#FFA500", "	#FF8C00", "#FF4500", "#FF6347", "#FF7F50","#FFA07A", "#DB7093", "#ADFF2F", "#CD5C5C", "#483D8B", "#FF00FF	", "#00FFFF	", "#00FF00	", "#800000	", "#DCDCDC	", "#D3D3D3	", '#C0C0C0	', "#A0522D", "#8B4513", "#4169E1	", '#7B68EE	', '#6495ED	', "#87CEEB	"];
function createRandomCircle(){
  const circle = document.createElement("div");


  const color = getRandomColor();

  circle.style.backgroundColor = color;

  const size = getRandomNumber(10, 60);


  const {width, height} = board.getBoundingClientRect();

  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.classList.add("circle");

  circle.style.width = `${size}px`;

  circle.style.height = `${size}px`;

  circle.style.top = `${y}px`;

  circle.style.left = `${x}px`;

  board.append(circle);
}

function getRandomNumber (min, max){
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor(){
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

