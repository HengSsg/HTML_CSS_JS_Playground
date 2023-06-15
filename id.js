const fs = require("fs");

// 예시 아이디 1000개 배열
var exampleIds = [];

// 예시 아이디 생성
for (var i = 1; i <= 1000; i++) {
  var id = "example" + i;
  exampleIds.push(id);
}

var jsonData = JSON.stringify(exampleIds, null, 2);

fs.writeFile("example.json", jsonData, "utf8", function (err) {
  if (err) {
    console.log("파일 저장 중 오류가 발생했습니다.");
    console.log(err);
  } else {
    console.log("저장 완료되었습니다.");
  }
});
