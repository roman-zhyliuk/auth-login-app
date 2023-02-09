"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth-module");
const auth_service_1 = require("./auth/auth.service");
const user_schema_1 = require("./auth/schemas/user-schema");
const login_controller_1 = require("./login/login.controller");
const login_service_1 = require("./login/login.service");
const raw_body_middleware_1 = require("./raw-body.middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(raw_body_middleware_1.RawBodyMiddleware).forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.UsersModule,
            mongoose_1.MongooseModule.forRoot(`mongodb+srv://Ticoran:yx9qtJrbjjPMdPS@cluster0.ly4qnra.mongodb.net/?retryWrites=true&w=majority`),
            mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }]),
        ],
        controllers: [app_controller_1.AppController, login_controller_1.LoginController],
        providers: [app_service_1.AppService, login_service_1.LoginService, auth_service_1.AuthService, auth_module_1.UsersModule],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map