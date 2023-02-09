"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const signup_service_1 = require("./signup.service");
describe('SignupService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [signup_service_1.SignupService],
        }).compile();
        service = module.get(signup_service_1.SignupService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=signup.service.spec.js.map