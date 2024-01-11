"use strict";

/**
 * DOM : Document Object Model 문서 객체 모델 / 일종의 인터페이스 / html을 js에서 다룰 수 있도록 해줌
 * 
 */

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value
    };
    console.log(req);
}

console.log(id);
console.log("hello");