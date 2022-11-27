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
const users_middleware_1 = __importDefault(require("../users/middleware/users.middleware"));
const users_controllers_1 = __importDefault(require("../users/controller/users.controllers"));
class AuthRoutes extends routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'AuthRoutes');
    }
    configureRoutes() {
        this.app.post('/auth/register', [
            (0, express_validator_1.body)('username').isString().isLength({ min: 3 }),
            (0, express_validator_1.body)('email').isEmail(),
            (0, express_validator_1.body)('password').isLength({ min: 6 }).withMessage('Password must include(6+ characters)'),
            validation_middleware_1.default.verifyBodyFieldsErrors,
            users_middleware_1.default.validateSameEmailExists,
            users_controllers_1.default.createUser
        ]);
        this.app.post('/auth/login', [
            (0, express_validator_1.body)('email').isEmail(),
            (0, express_validator_1.body)('password').isString(),
            validation_middleware_1.default.verifyBodyFieldsErrors,
            auth_middleware_1.default.verifyUserPassword,
            auth_controller_1.default.createJWT
        ]);
        // this.app.post('/auth/refresh-token',[
        //     JwtMiddleware.validJWTNeeded,
        //     JwtMiddleware.verifyRefreshBodyField,
        //     JwtMiddleware.validRefreshNeeded,
        //     AuthController.createJWT,
        // ])
        return this.app;
    }
}
exports.AuthRoutes = AuthRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2F1dGgvcm91dGVzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSwyREFBNkQ7QUFDN0QseURBQXlDO0FBQ3pDLHVHQUFpRjtBQUNqRixtRkFBeUQ7QUFDekQsb0ZBQTBEO0FBRzFELDRGQUFtRTtBQUNuRSw4RkFBcUU7QUFFckUsTUFBYSxVQUFXLFNBQVEsa0NBQWtCO0lBQzlDLFlBQVksR0FBdUI7UUFDL0IsS0FBSyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFDO1lBQzNCLElBQUEsd0JBQUksRUFBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLENBQUM7WUFDN0MsSUFBQSx3QkFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUN2QixJQUFBLHdCQUFJLEVBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsV0FBVyxDQUFDLHNDQUFzQyxDQUFDO1lBQ3RGLCtCQUF3QixDQUFDLHNCQUFzQjtZQUMvQywwQkFBZSxDQUFDLHVCQUF1QjtZQUN2QywyQkFBZ0IsQ0FBQyxVQUFVO1NBQUMsQ0FBQyxDQUFBO1FBRWpDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQztZQUN4QixJQUFBLHdCQUFJLEVBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLElBQUEsd0JBQUksRUFBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsK0JBQXdCLENBQUMsc0JBQXNCO1lBQy9DLHlCQUFjLENBQUMsa0JBQWtCO1lBQ2pDLHlCQUFjLENBQUMsU0FBUztTQUMzQixDQUFDLENBQUE7UUFFRix3Q0FBd0M7UUFDeEMsb0NBQW9DO1FBQ3BDLDRDQUE0QztRQUM1Qyx3Q0FBd0M7UUFDeEMsZ0NBQWdDO1FBQ2hDLEtBQUs7UUFDTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUE7SUFDbkIsQ0FBQztDQUVKO0FBL0JELGdDQStCQyJ9