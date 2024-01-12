"use strict"

// # : public -> private 접근제어자
class UserStorage {
    static #users = {
        id: ["woorimIT", "나개발", "김팀장"],
        psword: ["1234", "1234", "123456"],
        name: ["우리밋", "나개발", "김팀장"],
    };

    /**
     * 함수 구조 및 동작 원리
     * ...fields : 여러 필드 이름을 배열로 받음 -> newUsers 객체 누적값으로 받음 -> 최종적으로 요청된 필드들만 포함하는 새로운 객체 newUser return
     */
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            
            return newUsers;
        }, {});

        return newUsers;
    }
}

module.exports = UserStorage;