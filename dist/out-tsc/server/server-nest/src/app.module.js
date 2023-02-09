"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const login_controller_1 = require("./auth/login/login.controller");
const login_service_1 = require("./auth/login/login.service");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            mongoose_1.MongooseModule.forRoot(`mongodb+srv://Ticoran:yx9qtJrbjjPMdPS@cluster0.ly4qnra.mongodb.net/?retryWrites=true&w=majority`),
        ],
        controllers: [app_controller_1.AppController, login_controller_1.LoginController],
        providers: [app_service_1.AppService, login_service_1.LoginService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map