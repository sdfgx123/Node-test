"use strict";

const UserStorage = require("../../models/UserStorage");

/**
 * const ouput 자체는 객체임 -> 익명함수를 통해서 그 객체를 초기화 및 렌더링함 -> res.render() 함수를 통해서 렌더링한 정적 페이지를 return함 -> 이때, root 경로는 app.js에 정의돼 있음
 * 
 * 이 익명함수들은 라우트 핸들러임 -> 특정 경로에 대한 clinet의 요청에 응답하는 역할을 함
 * 
 * res.render 메서드는 템플릿 엔진을 사용 -> HTML 뷰를 렌더링 -> 그 결과를 client에게 보내는 기능을 함
 * 
 * *** 모듈 require도 없이 어떻게 req, res를 사용할 수 있는가? ***
 * bodyParser 같은 미들웨어는 애플리케이션의 메인 파일(app.js)에 설정됨 -> 한 번 설정되면, 모든 route에서 해당 미들웨어 기능 사용 가능함
 * 
 */
const output = {
    hello: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    }
}

const process = {
    login: (req, res) => {
        const id = req.body.id;
        const psword = req.body.psword;

        console.log(UserStorage.getUsers());

        const response = {};

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);

            if (users.psword[idx] === psword) {
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "login failed";
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};