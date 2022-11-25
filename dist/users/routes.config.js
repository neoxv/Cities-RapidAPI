"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const routes_config_1 = require("../common/routes.config");
const users_controllers_1 = __importDefault(require("./controller/users.controllers"));
const users_middleware_1 = __importDefault(require("./middleware/users.middleware"));
const validation_middleware_1 = __importDefault(require("../common/middleware/validation.middleware"));
const express_validator_1 = require("express-validator");
const jwt_middleware_1 = __importDefault(require("../auth/middleware/jwt.middleware"));
class UserRoutes extends routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UserRoutes');
    }
    configureRoutes() {
        this.app.route('/users/register')
            .post((0, express_validator_1.body)('username').isString().isLength({ min: 3 }), (0, express_validator_1.body)('email').isEmail(), (0, express_validator_1.body)('password').isLength({ min: 8 }).withMessage('Must include password (8+ characters)'), validation_middleware_1.default.verifyBodyFieldsErrors, users_middleware_1.default.validateSameEmailExists, users_controllers_1.default.createUser);
        this.app.param(`id`, users_middleware_1.default.extractUserId);
        this.app.route('/users/:id')
            .all(jwt_middleware_1.default.validJWTNeeded, users_middleware_1.default.validateUserExists)
            .get(users_controllers_1.default.getUserById)
            .delete(jwt_middleware_1.default.validJWTNeeded, users_controllers_1.default.delete);
        return this.app;
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3VzZXJzL3JvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsMkRBQTREO0FBQzVELHVGQUE4RDtBQUM5RCxxRkFBNEQ7QUFDNUQsdUdBQWlGO0FBQ2pGLHlEQUF5QztBQUV6Qyx1RkFBOEQ7QUFFOUQsTUFBYSxVQUFXLFNBQVEsa0NBQWtCO0lBQzlDLFlBQVksR0FBdUI7UUFDL0IsS0FBSyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBRUQsZUFBZTtRQUVYLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO2FBQzVCLElBQUksQ0FDRCxJQUFBLHdCQUFJLEVBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQzdDLElBQUEsd0JBQUksRUFBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFDdkIsSUFBQSx3QkFBSSxFQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyx1Q0FBdUMsQ0FBQyxFQUN2RiwrQkFBd0IsQ0FBQyxzQkFBc0IsRUFDL0MsMEJBQWUsQ0FBQyx1QkFBdUIsRUFDdkMsMkJBQWdCLENBQUMsVUFBVSxDQUFDLENBQUE7UUFFcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLDBCQUFlLENBQUMsYUFBYSxDQUFDLENBQUE7UUFFbkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO2FBQ3ZCLEdBQUcsQ0FBQyx3QkFBYSxDQUFDLGNBQWMsRUFBQywwQkFBZSxDQUFDLGtCQUFrQixDQUFDO2FBQ3BFLEdBQUcsQ0FBQywyQkFBZ0IsQ0FBQyxXQUFXLENBQUM7YUFDakMsTUFBTSxDQUFDLHdCQUFhLENBQUMsY0FBYyxFQUFFLDJCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBR2xFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNuQixDQUFDO0NBRUo7QUEzQkQsZ0NBMkJDIn0=