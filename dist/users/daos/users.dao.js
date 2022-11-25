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
const mongoose_service_1 = __importDefault(require("../../common/services/mongoose.service"));
const debug_1 = __importDefault(require("debug"));
const mongoose_service_2 = __importDefault(require("../../common/services/mongoose.service"));
const log = (0, debug_1.default)('app:dao');
class UsersDao {
    constructor() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.userSchema = new this.Schema({
            username: String,
            email: String,
            password: { type: String, select: false }
        });
        this.User = mongoose_service_2.default.getMongoose().model('Users', this.userSchema);
        log('Created new instance of UsersDao');
    }
    addUser(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new this.User(newUser);
            yield user.save();
            return user._id;
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.User.findById(id);
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.User.findOne({ email: email });
        });
    }
    getUserCredentials(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.User.findOne({ email: email }).select('_id email +password');
        });
    }
    updateUserById(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.User.findOneAndUpdate({ _id: id }, user, { new: true });
        });
    }
    removeUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.User.deleteOne({ _id: id });
        });
    }
}
exports.default = new UsersDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdXNlcnMvZGFvcy91c2Vycy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFHQSw4RkFBcUU7QUFDckUsa0RBQTBCO0FBQzFCLDhGQUFxRTtBQUVyRSxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsU0FBUyxDQUFDLENBQUE7QUFFN0MsTUFBTSxRQUFRO0lBU1Y7UUFSQSxXQUFNLEdBQUcsMEJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDOUMsZUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN6QixRQUFRLEVBQUMsTUFBTTtZQUNmLEtBQUssRUFBRSxNQUFNO1lBQ2IsUUFBUSxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDO1NBQzFDLENBQUMsQ0FBQTtRQUVGLFNBQUksR0FBRywwQkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWpFLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFSyxPQUFPLENBQUMsT0FBc0I7O1lBQ2hDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUNuQyxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUNqQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUE7UUFDbkIsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLEVBQVU7O1lBQ3hCLE9BQU8sTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUN2QyxDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsS0FBWTs7WUFDN0IsT0FBTyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUE7UUFDakQsQ0FBQztLQUFBO0lBRUssa0JBQWtCLENBQUMsS0FBYTs7WUFDbEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1FBQzFFLENBQUM7S0FBQTtJQUVLLGNBQWMsQ0FBQyxFQUFTLEVBQUUsSUFBOEI7O1lBQzFELE9BQU8sTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUMsR0FBRyxFQUFFLEVBQUUsRUFBQyxFQUFFLElBQUksRUFBRSxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFBO1FBQ3pFLENBQUM7S0FBQTtJQUVLLGNBQWMsQ0FBQyxFQUFTOztZQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsR0FBRyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUE7UUFDekMsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLFFBQVEsRUFBRSxDQUFDIn0=