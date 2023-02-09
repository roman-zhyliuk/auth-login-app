"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
// New controller for getting and sending requests
let SignupController = class SignupController {
    constructor(signupService) {
        this.signupService = signupService;
    }
    // handling GET request, main page, sending all info about users
    getAllUsers() {
        return this.signupService.getAllUsers();
    }
    // GET request for user id, sending all info about user
    getOneUser(id) {
        return this.signupService.getUserById(id);
    }
    // POST request, creates user using information provided
    createUser(createUserDto) {
        return this.signupService.createUser(createUserDto);
    }
    // Remove user
    remove(id) {
        return this.signupService.removeUser(id);
    }
    // Update user info
    updateUserInfo(updateUserDto, id) {
        return this.signupService.updateUserInfo(id, updateUserDto);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)()
], SignupController.prototype, "getAllUsers", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id'))
], SignupController.prototype, "getOneUser", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Header)('Chache-Control', 'none'),
    tslib_1.__param(0, (0, common_1.Body)())
], SignupController.prototype, "createUser", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id'))
], SignupController.prototype, "remove", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Param)('id'))
], SignupController.prototype, "updateUserInfo", null);
SignupController = tslib_1.__decorate([
    (0, common_1.Controller)('signup')
], SignupController);
exports.SignupController = SignupController;
//# sourceMappingURL=signup.controller.js.map