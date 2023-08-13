"use strict";


const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const body = this.body;
        const { email, passwd } = await UserStorage.getUserInfo(body.email);

        if (email) {
            if (email === body.email && passwd === body.passwd) {
                return { success: true};
            }
            return { success: false, msg: "ID or password is incorrect." };
        }
        return { success: false, msg: "ID does not exist." };
    }

    register() {
        const response = UserStorage.save(this.body);
        return response;
    }
}

module.exports = User;