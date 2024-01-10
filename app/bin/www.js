"use strict";

const app = require("../app");
const PORT = 3000;

// 이게 실질적으로 서버 실행시켜서 listen 하는 코드임
app.listen(PORT, () => {
    console.log("서버 가동");
  });