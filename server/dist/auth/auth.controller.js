"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const update_user_dto_1 = require("./dto/update-user-dto");
const auth_service_1 = require("./auth.service");
const create_user_validator_dto_1 = require("./dto/create-user-validator-dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    getAllUsers() {
        return this.authService.getAllUsers();
    }
    getOneUser(id) {
        return this.authService.getUserById(id);
    }
    async createUser(req) {
        const user = JSON.parse(req.rawBody);
        if ((await this.authService.findUserByUsername(user.username)) == 'error 1') {
            if ((await this.authService.findUserByEmail(user.email)) == 'error 1') {
                if (user.password == user.passwordRepeat) {
                    const errors = await (0, class_validator_1.validate)(user);
                    console.log(errors, 'that is errors');
                    if (errors.length > 0) {
                        return { err: errors };
                    }
                    else {
                        this.authService.createUser(user);
                        return { err: 'user was created' };
                    }
                }
                else {
                    return { err: 'passwords are not equal' };
                }
            }
            else {
                return { err: 'User with this email already exists' };
            }
        }
        else {
            return { err: 'User with this username already exists' };
        }
    }
    remove(id) {
        return this.authService.removeUser(id);
    }
    updateUserInfo(updateUserDto, id) {
        return this.authService.updateUserInfo(id, updateUserDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getOneUser", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Header)('Chache-Control', 'none'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_validator_dto_1.RegistrationDtoUser]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "createUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.UpdateUserDto, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updateUserInfo", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map