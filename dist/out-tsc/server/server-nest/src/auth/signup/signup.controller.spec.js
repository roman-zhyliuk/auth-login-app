"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const signup_controller_1 = require("./signup.controller");
describe('SignupController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [signup_controller_1.SignupController],
        }).compile();
        controller = module.get(signup_controller_1.SignupController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=signup.controller.spec.js.map