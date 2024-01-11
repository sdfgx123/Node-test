"use stict";
// 프론트 단에서 작동하는 JS파일

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");
// DOM 객체: 클라이언트가 HTML에서 입력한 데이터를 JS에서 제어할 수 있어야 한다.
// 이를 가능토록하는 것이 DOM 객체이다.(일종의 인터페이스) *Document Object Model
// Selector *선택자: JS 파일에 있는 태그를 지정
// #id 는 태그의 id 가 "id" 로 설정 된 태그를 지정해서 가져온다.
// query selector 에서 해당 파일을 가져오기 전에 아래에 오는 명령어가 먼저 실행된다.
// 따라서 ejs 파일에서 defer 옵션을 부여해주어야 한다.

// console.log(id, psword)

loginBtn.addEventListener("click", login);
// loginBtn이 클릭되면 login 이벤트를 실행한다.

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("로그인 중 에러 발생");
        });
};
// 요청 데이터이므로 req 변수에 담아준다. *object로 선언
// fetch를 통해 데이터(전달할 데이터: req)를 전달할 수 있다.
// 서버와 클라이언트가 데이터를 주고받을 경로를 설정해주어야 한다.
// 해당 경로에는 API 가 이미 만들어져있어야 하지만, 강의에서는 API가 미리 만들어졌다는 가정하에 데이터 전달하는 과정을 먼저 실습한다.
// object 형: 키-값의 형태로 저장, JSON 형식: 키-값을 문자열의 형태로 저장
// POST method로 데이터 전달, 데이터 형태가 JSON임을 headers를 통해 명시함. body로 데이터를 전달함.
// 이러한 형태를 갖추면 서버로 데이터 전달이 가능하고, 서버에서 이 데이터를 받으려면 해당 경로("/login")과 메써드(POST)에 맞는 API가 마련되어 있어야 한다.
// fetch로 데이터 전달 이후, 서버로부터 다시 데이터를 받으려면 .then() 구문 사용
// res.json()의 반환 값은 Promise 이다. Promise 를 받기 위해서는 .then() 구문 사용해야 함