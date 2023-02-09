"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupService = void 0;
const tslib_1 = require("tslib");
/* eslint-disable prettier/prettier */
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./schemas/user-schema");
let SignupService = class SignupService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    // returns all info about users
    async getAllUsers() {
        return this.userModel.find().exec();
    }
    // returns all info about user with provided id
    async getUserById(id) {
        return this.userModel.findById(id);
    }
    // creating new user
    async createUser(userDto) {
        const newUser = new this.userModel(userDto);
        return newUser.save();
    }
    // deleting user
    async removeUser(id) {
        return this.userModel.findByIdAndRemove(id);
    }
    // updating user info
    async updateUserInfo(id, userDto) {
        return this.userModel.findByIdAndUpdate(id, userDto, { new: true });
    }
};
SignupService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name))
], SignupService);
exports.SignupService = SignupService;
//# sourceMappingURL=signup.service.js.map