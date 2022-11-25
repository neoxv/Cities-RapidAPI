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
const bcrypt_1 = __importDefault(require("bcrypt"));
const auth_controller_1 = __importDefault(require("../../auth/controllers/auth.controller"));
const log = (0, debug_1.default)('app:users-controllers');
class UsersController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.password = yield bcrypt_1.default.hash(req.body.password, 10);
            const userId = yield users_services_1.default.create(req.body);
            req.body = {
                id: userId
            };
            yield auth_controller_1.default.createJWT(req, res);
            // res.status(201).send({...tokens,_id: userId,refreshKey: req.body.refreshKey})
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield users_services_1.default.getById(req.body.id);
            res.status(200).send(user);
        });
    }
    patch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body.password) {
                req.body.password = yield bcrypt_1.default.hash(req.body.password, 10);
            }
            log(yield users_services_1.default.patchById(req.body.id, req.body));
            res.status(204).send();
        });
    }
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.password = yield bcrypt_1.default.hash(req.body.password, 10);
            log(yield users_services_1.default.putById(req.body.id, req.body));
            res.status(204).send();
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            log(yield users_services_1.default.deleteById(req.body.id));
            res.status(204).send();
        });
    }
}
exports.default = new UsersController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91c2Vycy9jb250cm9sbGVyL3VzZXJzLmNvbnRyb2xsZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsZ0ZBQXNEO0FBQ3RELGtEQUF5QjtBQUN6QixvREFBMkI7QUFFM0IsNkZBQW1FO0FBRW5FLE1BQU0sR0FBRyxHQUFtQixJQUFBLGVBQUssRUFBQyx1QkFBdUIsQ0FBQyxDQUFBO0FBRTFELE1BQU0sZUFBZTtJQUNYLFVBQVUsQ0FBQyxHQUFtQixFQUFFLEdBQW9COztZQUN0RCxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLGdCQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1lBQzVELE1BQU0sTUFBTSxHQUFHLE1BQU0sd0JBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ25ELEdBQUcsQ0FBQyxJQUFJLEdBQUc7Z0JBQ1AsRUFBRSxFQUFFLE1BQU07YUFDYixDQUFBO1lBQ0QsTUFBTSx5QkFBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUE7WUFDdkMsZ0ZBQWdGO1FBQ3BGLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxHQUFtQixFQUFFLEdBQW9COztZQUN2RCxNQUFNLElBQUksR0FBRyxNQUFNLHdCQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDckQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDOUIsQ0FBQztLQUFBO0lBRUssS0FBSyxDQUFDLEdBQW1CLEVBQUUsR0FBb0I7O1lBQ2pELElBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUM7Z0JBQ2pCLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sZ0JBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUE7YUFDL0Q7WUFFRCxHQUFHLENBQUMsTUFBTSx3QkFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtZQUN6RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO1FBQzFCLENBQUM7S0FBQTtJQUVLLEdBQUcsQ0FBQyxHQUFtQixFQUFFLEdBQW9COztZQUMvQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLGdCQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzVELEdBQUcsQ0FBQyxNQUFNLHdCQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3hELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDMUIsQ0FBQztLQUFBO0lBRUssTUFBTSxDQUFDLEdBQW1CLEVBQUUsR0FBb0I7O1lBQ2xELEdBQUcsQ0FBQyxNQUFNLHdCQUFhLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtZQUNoRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO1FBQzFCLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxlQUFlLEVBQUUsQ0FBQyJ9