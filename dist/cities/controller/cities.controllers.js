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
const cities_services_1 = __importDefault(require("../services/cities.services"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:cities-controllers');
class CitiesController {
    createCity(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield cities_services_1.default.create(req.body);
            res.status(201).send();
        });
    }
    getCityById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.body.userId;
            const cities = yield cities_services_1.default.getCitiesByUser(userId);
            res.status(200).send(cities);
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cities = yield cities_services_1.default.getAll();
            res.status(200).send(cities);
        });
    }
}
exports.default = new CitiesController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2l0aWVzLmNvbnRyb2xsZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY2l0aWVzL2NvbnRyb2xsZXIvY2l0aWVzLmNvbnRyb2xsZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0ZBQXdEO0FBQ3hELGtEQUF5QjtBQUV6QixNQUFNLEdBQUcsR0FBbUIsSUFBQSxlQUFLLEVBQUMsd0JBQXdCLENBQUMsQ0FBQTtBQUUzRCxNQUFNLGdCQUFnQjtJQUNaLFVBQVUsQ0FBQyxHQUFtQixFQUFFLEdBQW9COztZQUN0RCxNQUFNLHlCQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNyQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO1FBQzFCLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxHQUFtQixFQUFFLEdBQW9COztZQUN2RCxNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQTtZQUM5QixNQUFNLE1BQU0sR0FBRyxNQUFNLHlCQUFjLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQzNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLENBQUM7S0FBQTtJQUVLLE1BQU0sQ0FBQyxHQUFtQixFQUFFLEdBQW9COztZQUNsRCxNQUFNLE1BQU0sR0FBRyxNQUFNLHlCQUFjLENBQUMsTUFBTSxFQUFFLENBQUE7WUFDNUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsQ0FBQztLQUFBO0NBRUo7QUFFRCxrQkFBZSxJQUFJLGdCQUFnQixFQUFFLENBQUMifQ==