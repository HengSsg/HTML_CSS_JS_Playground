var hoverableDiv = document.getElementById("hoverableDiv");
var intervalId;

hoverableDiv.addEventListener("mouseover", function () {
  intervalId = setInterval(changeBackgroundColor, 150);
});

hoverableDiv.addEventListener("mouseout", function () {
  hoverableDiv.style.backgroundColor = "white";

  clearInterval(intervalId);
});

function changeBackgroundColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  hoverableDiv.style.backgroundColor = color;
}
