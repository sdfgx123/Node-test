"use strict";

/*
라우터의 역할
1. 라우터 인스턴스 생성
2. 경로별 라우팅 로직 정의
3. 모듈화: 라우터 모듈로 생성 > 다른 파일에서 재사용 가능 > 코드 유지보수 용이
*/

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello);
router.get("/login", ctrl.login);

module.exports = router;