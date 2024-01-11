"use strict";

const users = {
    id: ["user01", "user02", "user03"],
    psword: ["1111", "2222", "3333"],
};

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
        const id = req.body.id,
            psword = req.body.psword;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);

            if (users.psword[idx] === psword) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "login failed: id or password does not match with what you wrote",
        });
    },
};

module.exports = {
    output,
    process,
};