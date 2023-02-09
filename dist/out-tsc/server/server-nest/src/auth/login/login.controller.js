"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
let LoginController = class LoginController {
    constructor(loginService) {
        this.loginService = loginService;
    }
    async login(user) {
        console.log(user, 'df;lsdjg;ksj');
        const result = await this.loginService.validateUser(user);
        console.log(result);
        return result;
    }
};
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)())
], LoginController.prototype, "login", null);
LoginController = tslib_1.__decorate([
    (0, common_1.Controller)('login')
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map