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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./schemas/user-schema");
let AuthService = class AuthService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async getAllUsers() {
        return this.userModel.find().exec();
    }
    async getUserById(id) {
        return this.userModel.findById(id);
    }
    async createUser(userDto) {
        const newUser = new this.userModel(userDto);
        console.log(userDto, 'user from server side 1, promise to return user', typeof userDto);
        console.log(newUser, 'created user from server side', typeof newUser);
        newUser.save();
        return newUser;
    }
    async findUserByEmail(inputEmail) {
        const user = await this.userModel.findOne({ email: inputEmail }).exec() || '';
        if (user) {
            return user;
        }
        else {
            return 'error 1';
        }
    }
    async findUserByUsername(inputUsername) {
        const user = await this.userModel.findOne({ username: inputUsername }).exec() || '';
        console.log(user, 'user before error', user.toString().length);
        if (user.toString().length != 0) {
            console.log('user without error');
            return user;
        }
        else {
            console.log('error');
            return 'error 1';
        }
    }
    async removeUser(id) {
        return this.userModel.findByIdAndRemove(id);
    }
    async updateUserInfo(id, userDto) {
        return this.userModel.findByIdAndUpdate(id, userDto, { new: true });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map