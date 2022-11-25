"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const routes_config_1 = require("../common/routes.config");
const express_validator_1 = require("express-validator");
const validation_middleware_1 = __importDefault(require("../common/middleware/validation.middleware"));
const auth_middleware_1 = __importDefault(require("./middleware/auth.middleware"));
const auth_controller_1 = __importDefault(require("./controllers/auth.controller"));
const jwt_middleware_1 = __importDefault(require("./middleware/jwt.middleware"));
class AuthRoutes extends routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'AuthRoutes');
    }
    configureRoutes() {
        this.app.post('/auth/login', [
            (0, express_validator_1.body)('email').isEmail(),
            (0, express_validator_1.body)('password').isString(),
            validation_middleware_1.default.verifyBodyFieldsErrors,
            auth_middleware_1.default.verifyUserPassword,
            auth_controller_1.default.createJWT
        ]);
        this.app.post('/auth/refresh-token', [
            jwt_middleware_1.default.validJWTNeeded,
            jwt_middleware_1.default.verifyRefreshBodyField,
            jwt_middleware_1.default.validRefreshNeeded,
            auth_controller_1.default.createJWT,
        ]);
        return this.app;
    }
}
exports.AuthRoutes = AuthRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2F1dGgvcm91dGVzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSwyREFBNkQ7QUFDN0QseURBQXlDO0FBQ3pDLHVHQUFpRjtBQUNqRixtRkFBeUQ7QUFDekQsb0ZBQTBEO0FBRTFELGlGQUF3RDtBQUV4RCxNQUFhLFVBQVcsU0FBUSxrQ0FBa0I7SUFDOUMsWUFBWSxHQUF1QjtRQUMvQixLQUFLLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFDO1lBQ3hCLElBQUEsd0JBQUksRUFBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsSUFBQSx3QkFBSSxFQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUMzQiwrQkFBd0IsQ0FBQyxzQkFBc0I7WUFDL0MseUJBQWMsQ0FBQyxrQkFBa0I7WUFDakMseUJBQWMsQ0FBQyxTQUFTO1NBQzNCLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFDO1lBQ2hDLHdCQUFhLENBQUMsY0FBYztZQUM1Qix3QkFBYSxDQUFDLHNCQUFzQjtZQUNwQyx3QkFBYSxDQUFDLGtCQUFrQjtZQUNoQyx5QkFBYyxDQUFDLFNBQVM7U0FDM0IsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ25CLENBQUM7Q0FFSjtBQXZCRCxnQ0F1QkMifQ==