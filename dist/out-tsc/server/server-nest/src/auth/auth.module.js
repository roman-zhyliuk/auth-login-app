"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const login_controller_1 = require("./login/login.controller");
const login_service_1 = require("./login/login.service");
const signup_controller_1 = require("./signup/signup.controller");
const signup_service_1 = require("./signup/signup.service");
const user_schema_1 = require("./signup/schemas/user-schema");
let AuthModule = class AuthModule {
};
AuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [login_controller_1.LoginController, signup_controller_1.SignupController],
        providers: [login_service_1.LoginService, signup_service_1.SignupService],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }]),
        ],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map