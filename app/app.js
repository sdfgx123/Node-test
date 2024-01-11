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

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;

const home = require("./src/routes/home");

/**
 * app.set("views", "./src/views");
 * 이 코드는 Express 애플리케이션에게 HTML 템플릿 파일이 어디에 위치하는지 알려줌 -> ./src/views dir가 뷰 파일의 root 경로로 설정됨
 * "views" 파라미터는 특별한 의미를 가지는 키워드임 -> views는 Express의 설정 옵션 중 하나로서, 뷰 템플릿을 찾을 기본 dir로 사용함
 * 
 */
app.set("views", "./src/views");
app.set("view engine", "ejs");

/**
 * Express.js에서 정적 파일을 서비스하기 위한 설정임
 * express.static : 정적 파일을 제공하기 위해 사용 -> 지정된 dir의 파일을 HTTP req의 URL과 매핑해서 제공 -> 이 설정을 통해 src/public dir 안에 있는 파일들을 웹서버의 root 경로("/")에서 직접 접근할 수 있도록 함 -> 정적 파일을 client에게 직접 제공 가능
 */
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());

// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * 라우팅과 미들웨어
 * 이 라인은 Express.js 애플리케이션에서 미들웨어를 등록하는 방법 중 하나임
 * 
 * 미들웨어 : req - res 객체 조작, req - res 사이클 종료, 사이클 내의 다음 미들웨어 함수 호출
 * 
 * "/" : 미들웨어 함수가 적용될 경로 지정 -> "/"는 애플리케이션의 루트 경로임 -> home : 사용할 미들웨어 함수 또는 함수의 배열 -> 여기서 home은 다른 파일에서 정의되고 여기로 가져와진 라우터 객체임 -> 즉, home 라우터를 애플리케이션 root 경로에 적용한다는 것을 의미함 -> localhost:3000/과 그 하위 경로에 대한 요청이 home 라우터에서 정의된 route 핸들러에 의해 처리됨을 의미함
 */
app.use("/", home); // 미들웨어 등록

module.exports = app;
