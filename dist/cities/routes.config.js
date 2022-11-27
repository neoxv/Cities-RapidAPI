"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesRoutes = void 0;
const routes_config_1 = require("../common/routes.config");
const jwt_middleware_1 = __importDefault(require("../auth/middleware/jwt.middleware"));
const cities_controllers_1 = __importDefault(require("./controller/cities.controllers"));
class CitiesRoutes extends routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'CitiesRoutes');
    }
    configureRoutes() {
        this.app.route('/cities')
            .all(jwt_middleware_1.default.validJWTNeeded)
            .post(jwt_middleware_1.default.validJWTNeeded, cities_controllers_1.default.createCity)
            .get(jwt_middleware_1.default.validJWTNeeded, cities_controllers_1.default.getCityById);
        this.app.route('/cities/all').get(cities_controllers_1.default.getAll);
        return this.app;
    }
}
exports.CitiesRoutes = CitiesRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NpdGllcy9yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLDJEQUE0RDtBQUM1RCx1RkFBOEQ7QUFDOUQseUZBQWdFO0FBRWhFLE1BQWEsWUFBYSxTQUFRLGtDQUFrQjtJQUNoRCxZQUFZLEdBQXVCO1FBQy9CLEtBQUssQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLENBQUE7SUFDOUIsQ0FBQztJQUVELGVBQWU7UUFFWCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7YUFDcEIsR0FBRyxDQUFDLHdCQUFhLENBQUMsY0FBYyxDQUFDO2FBQ2pDLElBQUksQ0FBQyx3QkFBYSxDQUFDLGNBQWMsRUFBRSw0QkFBaUIsQ0FBQyxVQUFVLENBQUM7YUFDaEUsR0FBRyxDQUFDLHdCQUFhLENBQUMsY0FBYyxFQUFFLDRCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBRXJFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyw0QkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUUzRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUE7SUFDbkIsQ0FBQztDQUVKO0FBakJELG9DQWlCQyJ9