var validateButton = document.getElementById("validate");
var validatedText = document.getElementById("validatedText");
const passwordInput = document.getElementById("password");
const passwordInfo = document.getElementById("password-info");
const passwordCheckInput = document.getElementById("passwordCheck");
const passwordCheck = document.getElementById("password-check");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const emailCheck = document.getElementById("email-check");
const nameInput = document.getElementById("name");

validateButton.addEventListener("click", function () {
  fetch("../id.json")
    .then((response) => response.json())
    .then((data) => {
      var idInput = document.getElementById("id");
      var id = idInput.value;
      var arr = [];

      console.log();
      for (let i = 0; i < data.id.length; i++) {
        arr.push(data.id[i]);
      }

      if (id.length > 0) {
        if (arr.indexOf(id) == -1) {
          validatedText.textContent = "사용 가능한 ID입니다.";
          validatedText.style.color = "green";
        } else {
          validatedText.textContent = "사용할 수 없는 ID입니다.";
          validatedText.style.color = "red";
        }
      }
    });
});

passwordInput.addEventListener("input", function () {
  const password = this.value;
  const isValid =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,10}$/.test(
      password
    );

  if (isValid) {
    passwordInfo.textContent = "비밀번호 조건이 충족되었습니다.";
    passwordInfo.style.color = "green";
  } else {
    passwordInfo.textContent =
      "영어, 숫자, 특수문자를 포함한 10자 이하의 비밀번호를 입력해주세요.";
    passwordInfo.style.color = "red";
  }
});

passwordCheckInput.addEventListener("input", function () {
  const password = this.value;
  if (password === passwordInput.value) {
    passwordCheck.textContent = "비밀번호가 일치합니다.";
    passwordCheck.style.color = "green";
  } else {
    passwordCheck.textContent = "비밀번호가 일치하지 않습니다";
    passwordCheck.style.color = "red";
  }
});

phoneInput.addEventListener("input", function () {
  const phoneNumber = this.value.replace(/[^0-9]/g, ""); // 숫자 이외의 문자 제거
  const formattedPhoneNumber = formatPhoneNumber(phoneNumber); // 전화번호에 - 추가

  this.value = formattedPhoneNumber;
});

function formatPhoneNumber(phoneNumber) {
  if (phoneNumber.length < 4) {
    return phoneNumber;
  } else if (phoneNumber.length < 8) {
    return phoneNumber.slice(0, 3) + "-" + phoneNumber.slice(3);
  } else if (phoneNumber.length < 11) {
    return (
      phoneNumber.slice(0, 3) +
      "-" +
      phoneNumber.slice(3, 7) +
      "-" +
      phoneNumber.slice(7)
    );
  } else {
    return (
      phoneNumber.slice(0, 3) +
      "-" +
      phoneNumber.slice(3, 7) +
      "-" +
      phoneNumber.slice(7, 11)
    );
  }
}

emailInput.addEventListener("input", function () {
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  console.log("hello", emailPattern.test(emailInput.value));
  if (emailPattern.test(emailInput.value)) {
    emailCheck.textContent = "유효한 이메일 형식입니다.";
    emailCheck.style.color = "green";
  } else {
    emailCheck.textContent = "유효하지 않은 이메일 형식입니다.";
    emailCheck.style.color = "red";
  }
});

const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // 기본 동작인 페이지 새로고침을 방지

  // 추가로 수행하고자 하는 동작 또는 데이터 처리 로직 작성

  var formData = new FormData(this);
  var id = formData.get("id");
  var pw = formData.get("password");
  var name = formData.get("name");
  var phone = formData.get("phone");
  var email = formData.get("email");
  var post = formData.get("post");
  var address = formData.get("post");
  var address2 = formData.get("message");

  console.log("id: ", id);
  console.log("pw: ", pw);
  console.log("name: ", name);
  console.log("phone: ", phone);
  console.log("email: ", email);
  console.log("post: ", post);
  console.log("address: ", address);
  console.log("address2: ", address2);

  // 페이지 새로고침이 발생하지 않으므로 필요한 작업을 수행하고자 할 때 사용
});
