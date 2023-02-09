"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.User = void 0;
const tslib_1 = require("tslib");
/* eslint-disable prettier/prettier */
const mongoose_1 = require("@nestjs/mongoose");
let User = class User {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)()
], User.prototype, "username", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)()
], User.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)()
], User.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)()
], User.prototype, "email", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)()
], User.prototype, "password", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)()
], User.prototype, "passwordRepeat", void 0);
User = tslib_1.__decorate([
    (0, mongoose_1.Schema)()
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
//# sourceMappingURL=user-schema.js.map