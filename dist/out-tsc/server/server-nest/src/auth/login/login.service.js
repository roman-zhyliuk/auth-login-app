"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const tslib_1 = require("tslib");
/* eslint-disable prettier/prettier */
const common_1 = require("@nestjs/common");
let LoginService = class LoginService {
    async validateUser(user) {
        await console.log('User validation');
        console.log(user, 'xcvxcbxvb');
        console.log('true');
        return { success: true };
    }
};
LoginService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map