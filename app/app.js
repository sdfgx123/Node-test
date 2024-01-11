"use strict";

// const http = require('http');
// const app = http.createServer((req, res) => {
//     // console.log(req.url); // req로 들어온 url을 파싱해준다
//     res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
//     if (req.url === "/") {
//         res.end("root 한글 테스트");
//     } else if (req.url === "/login") {
//         res.end("this is login router.");
//     }
// });

// app.listen(3001, () => {
//     console.log("HTTP 가동 서버");
// });

/*
app.js의 역할
1. 애플리케이션 인스턴스 생성 > 이 인스턴스를 통해 전체 애플리케이션 config, middleware, routing 관리
2. 전역 설정 > 템플릿 엔진 config, port num 등
3. 라우터 연결 > 다른 파일에서 정의된 라우터 > 애플리케이션과 연결 > 라우직 로직 분리 관리 가능
*/

// 모듈
const express = require("express");
const app = express();

const PORT = 3000;

// 라우팅이랑 앱 세팅 보니까, 라우팅 단이랑 뷰 단을 엄밀하게 잘 구분해 줘야 하는 것 같음

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); // 미들웨어 등록
app.use(express.static(`${__dirname}/src/public`));

module.exports = app;
