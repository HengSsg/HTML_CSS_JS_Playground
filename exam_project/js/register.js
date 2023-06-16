const name1 = document.getElementById("name");
const id = document.getElementById("id");
const pw = document.getElementById("pw");
const pw2 = document.getElementById("pw2");
const address = document.getElementById("address");
const detailAdd = document.getElementById("detailAdd");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const form = document.getElementById("myForm");
const validPw = document.getElementById("validPw");
const validPw2 = document.getElementById("validPw2");

document.getElementById("duplicate").addEventListener("click", function () {
  console.log("hello");
});
// 비밀번호
pw.addEventListener("input", function () {
  const password = this.value;
  const isValid =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,10}$/.test(
      password
    );

  if (isValid) {
    validPw.textContent = "비밀번호 조건이 충족되었습니다.";
    validPw.style.color = "green";
  } else {
    validPw.textContent =
      "영어, 숫자, 특수문자 조합으로 10자리 이하로 만드세요";
    validPw.style.color = "red";
  }
});

// 비밀번호 확인
pw2.addEventListener("input", function () {
  const password = this.value;

  if (pw.value == password) {
    validPw2.textContent = "비밀번호가 일치합니다";
    validPw2.style.color = "green";
  } else {
    validPw2.textContent = "비밀번호가 일치하지 않습니다.";
    validPw2.style.color = "red";
  }
});
// 체크박스 모두 동의
const checkAll = document.getElementById("checkAll"); // 전체동의 버튼
let checkBoxes = document.querySelectorAll(".checkOptions"); // 체크박스 다 모으기

checkAll.addEventListener("change", function () {
  checkBoxes.forEach(function (check) {
    check.checked = checkAll.checked;
  });
});

// 폼 서밋
form.addEventListener("submit", function (event) {
  event.preventDefault(); // 기본 동작인 페이지 새로고침을 방지

  // 추가로 수행하고자 하는 동작 또는 데이터 처리 로직 작성
  let formData = new FormData(this);
  let name = formData.get("name");
  let id = formData.get("id");
  let pw = formData.get("pw");
  let addr = formData.get("address");
  let detailadd = formData.get("detailAdd");
  let email = formData.get("email");
  let phone = formData.get("phone");
  let gender = formData.get("radioOptions");

  let checks = document.getElementsByName("checkBox");
  let selectedBox = [];
  for (let i = 0; i < checks.length; i++) {
    if (checks[i].checked) {
      selectedBox.push(checks[i].value);
    }
  }

  let select = formData.get("select");

  let jsonObject = {};

  formData.forEach(function (value, key) {
    jsonObject[key] = value;
  });

  let jsonData = JSON.stringify(jsonObject);

  console.log(jsonData);
  localStorage.setItem("./jsondata.json", jsonData);

  // 페이지 새로고침이 발생하지 않으므로 필요한 작업을 수행하고자 할 때 사용
});

const button2 = document.getElementById("dButton");

// button2.addEventListener("click", function () {
//   fetch("../data/data.json")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data.usersData[0].name);
//     })
//     .catch((err) => console.log(err));
// });

button2.addEventListener("click", function () {
  $(document).ready(function () {
    $("#dButton").click(function () {
      $.getJSON("../data/data.json", function (data) {
        console.log(data);
      });
    });
  });
});
