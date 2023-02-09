"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let LoginComponent = class LoginComponent {
    constructor(http) {
        this.http = http;
        this.email = '';
        this.password = '';
    }
    onSubmit() {
        const user = { email: this.email, password: this.password };
        this.http.post('http://localhost:3000/login', user).subscribe((res) => {
            console.log(res);
        });
    }
};
LoginComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map