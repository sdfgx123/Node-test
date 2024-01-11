"use strict";

const express = require("express");
const router = express.Router(); // 라우터 객체 생성

const ctrl = require("./home.ctrl");

// param1: 라우팅 경로, param2: return 객체로 이해
/**
 * router.get && router.post : GET, POST에 대응하는 라우터 메서드
 * 예를 들어, localhost:3000/ URL이 호출되면, router.get("/")에서 요청 받음 -> ctrl(./home.ctrl.js)의 hello 함수 실행 -> 이때 그 함수는 익명함수임 -> 
 */
router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

/**
 * 위에서 생성된 router 객체를 모듈로 export함, 즉 모듈을 외부로 공개함
 * 다른 파일에서 이 모듈을 requrie() 함수를 통해서 호출 가능, 즉 이 라우터를 다른 파일에서 재사용 가능
 */
module.exports = router;