"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const login_component_1 = require("./login/login.component");
const signup_component_1 = require("./signup/signup.component");
const main_component_1 = require("./main/main.component");
const profile_component_1 = require("./profile/profile.component");
const profile_edit_component_1 = require("./profile-edit/profile-edit.component");
const forms_1 = require("@angular/forms");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            signup_component_1.SignupComponent,
            main_component_1.MainComponent,
            profile_component_1.ProfileComponent,
            profile_edit_component_1.ProfileEditComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            forms_1.FormsModule
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map