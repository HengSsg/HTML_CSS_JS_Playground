var colorButton = document.getElementById("colorButton");
var timerId;

colorButton.addEventListener("hovor");
colorButton.addEventListener("click", function () {
  colorButton.disabled = true; // 버튼 비활성화

  timerId = setInterval(changeBackgroundColor, 50); // 1초마다 changeBackgroundColor 함수 호출

  setTimeout(function () {
    clearInterval(timerId); // 타이머 정지
    colorButton.disabled = false; // 버튼 활성화
  }, 10000); // 10초 후에 타이머 정지 및 버튼 활성화
});

function changeBackgroundColor() {
  var body = document.querySelector("body");
  var color = getRandomColor();
  body.style.backgroundColor = color;
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
