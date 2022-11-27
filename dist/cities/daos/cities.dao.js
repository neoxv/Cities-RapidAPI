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
class CitiesDao {
    constructor() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.citySchema = new this.Schema({
            id: String,
            wikiDataId: String,
            type: String,
            city: String,
            name: String,
            country: String,
            countryCode: String,
            region: String,
            regionCode: String,
            latitude: Number,
            longitude: Number,
            population: Number,
            userId: { type: this.Schema.Types.ObjectId, ref: 'User' }
        });
        this.City = mongoose_service_2.default.getMongoose().model('Cities', this.citySchema);
        log('Created new instance of CitiesDao');
    }
    addCity(newCity) {
        return __awaiter(this, void 0, void 0, function* () {
            const city = new this.City(newCity);
            yield city.save();
            return;
        });
    }
    getCitiesByUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.City.find({ userId: id });
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.City.find();
        });
    }
}
exports.default = new CitiesDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2l0aWVzLmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NpdGllcy9kYW9zL2NpdGllcy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSw4RkFBcUU7QUFDckUsa0RBQTBCO0FBQzFCLDhGQUFxRTtBQUVyRSxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsU0FBUyxDQUFDLENBQUE7QUFFN0MsTUFBTSxTQUFTO0lBbUJYO1FBbEJBLFdBQU0sR0FBRywwQkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUM5QyxlQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3pCLEVBQUUsRUFBQyxNQUFNO1lBQ1QsVUFBVSxFQUFDLE1BQU07WUFDakIsSUFBSSxFQUFDLE1BQU07WUFDWCxJQUFJLEVBQUMsTUFBTTtZQUNYLElBQUksRUFBQyxNQUFNO1lBQ1gsT0FBTyxFQUFDLE1BQU07WUFDZCxXQUFXLEVBQUMsTUFBTTtZQUNsQixNQUFNLEVBQUMsTUFBTTtZQUNiLFVBQVUsRUFBQyxNQUFNO1lBQ2pCLFFBQVEsRUFBQyxNQUFNO1lBQ2YsU0FBUyxFQUFDLE1BQU07WUFDaEIsVUFBVSxFQUFDLE1BQU07WUFDakIsTUFBTSxFQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFDO1NBQ3pELENBQUMsQ0FBQTtRQUVGLFNBQUksR0FBRywwQkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWxFLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFSyxPQUFPLENBQUMsT0FBc0I7O1lBQ2hDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUNuQyxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUNqQixPQUFNO1FBQ1YsQ0FBQztLQUFBO0lBRUssaUJBQWlCLENBQUMsRUFBVTs7WUFDOUIsT0FBTyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUE7UUFDNUMsQ0FBQztLQUFBO0lBRUssTUFBTTs7WUFDUixPQUFPLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQyxDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksU0FBUyxFQUFFLENBQUMifQ==