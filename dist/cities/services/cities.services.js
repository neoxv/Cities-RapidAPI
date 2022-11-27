"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cities_dao_1 = __importDefault(require("../daos/cities.dao"));
class CitiesService {
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return cities_dao_1.default.addCity(resource);
        });
    }
    getCitiesByUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return cities_dao_1.default.getCitiesByUserId(id);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return cities_dao_1.default.getAll();
        });
    }
}
exports.default = new CitiesService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2l0aWVzLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY2l0aWVzL3NlcnZpY2VzL2NpdGllcy5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLG9FQUEyQztBQUczQyxNQUFNLGFBQWE7SUFDVCxNQUFNLENBQUMsUUFBdUI7O1lBQ2hDLE9BQU8sb0JBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsQ0FBQztLQUFBO0lBRUssZUFBZSxDQUFDLEVBQVU7O1lBQzVCLE9BQU8sb0JBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQyxDQUFDO0tBQUE7SUFFSyxNQUFNOztZQUNSLE9BQU8sb0JBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM5QixDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksYUFBYSxFQUFFLENBQUMifQ==