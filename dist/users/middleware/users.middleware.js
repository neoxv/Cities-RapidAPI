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
const users_services_1 = __importDefault(require("../services/users.services"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:users-middleware');
class UsersMiddleware {
    validateUserExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield users_services_1.default.getById(req.params.id);
            if (user) {
                next();
            }
            else {
                res.status(400).send({ error: `User ${req.params.id} not found` });
            }
        });
    }
    validateSameEmailExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield users_services_1.default.getByEmail(req.body.email);
            if (!user) {
                next();
            }
            else {
                res.status(400).send({ error: `User email already exists` });
            }
        });
    }
    extractUserId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.id = req.params.id;
            next();
        });
    }
}
exports.default = new UsersMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzL21pZGRsZXdhcmUvdXNlcnMubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGdGQUFzRDtBQUN0RCxrREFBeUI7QUFFekIsTUFBTSxHQUFHLEdBQW1CLElBQUEsZUFBSyxFQUFDLHNCQUFzQixDQUFDLENBQUE7QUFFekQsTUFBTSxlQUFlO0lBQ1gsa0JBQWtCLENBQUMsR0FBbUIsRUFBRSxHQUFvQixFQUFFLElBQXlCOztZQUN6RixNQUFNLElBQUksR0FBRyxNQUFNLHdCQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDdkQsSUFBRyxJQUFJLEVBQUM7Z0JBQ0osSUFBSSxFQUFFLENBQUM7YUFDVjtpQkFBSTtnQkFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxRQUFRLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxZQUFZLEVBQUMsQ0FBQyxDQUFBO2FBQ25FO1FBQ0wsQ0FBQztLQUFBO0lBRUssdUJBQXVCLENBQUMsR0FBbUIsRUFBRSxHQUFvQixFQUFFLElBQXlCOztZQUM5RixNQUFNLElBQUksR0FBRyxNQUFNLHdCQUFhLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDM0QsSUFBRyxDQUFDLElBQUksRUFBQztnQkFDTCxJQUFJLEVBQUUsQ0FBQzthQUNWO2lCQUFJO2dCQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLDJCQUEyQixFQUFDLENBQUMsQ0FBQTthQUM3RDtRQUNMLENBQUM7S0FBQTtJQUVLLGFBQWEsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQ3ZGLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQzVCLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLGVBQWUsRUFBRSxDQUFDIn0=