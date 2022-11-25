"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:mongoose-service');
class MongooseService {
    constructor() {
        this.count = 0;
        this.mongooseOptions = {
            serverSelectionTimeoutMS: 5000,
        };
        this.connectWithRetry = () => {
            log('Attempting MongoDB connection (will retry if needed)');
            //change localhost to mongo
            mongoose_1.default.connect('mongodb://localhost:27017/employee-db', this.mongooseOptions)
                .then(() => {
                log('MongoDB is connected');
            })
                .catch((err) => {
                const retrySeconds = 5;
                log(`MongoDB connection unsuccessful (will retry #${++this.count} after ${retrySeconds} seconds);`, err);
                setTimeout(this.connectWithRetry, retrySeconds * 1000);
            });
        };
        this.connectWithRetry();
    }
    getMongoose() {
        return mongoose_1.default;
    }
}
exports.default = new MongooseService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tb25nb29zZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQStCO0FBQy9CLGtEQUF5QjtBQUV6QixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsc0JBQXNCLENBQUMsQ0FBQTtBQUUxRCxNQUFNLGVBQWU7SUFNakI7UUFMUSxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1Ysb0JBQWUsR0FBMkI7WUFDOUMsd0JBQXdCLEVBQUUsSUFBSTtTQUNqQyxDQUFBO1FBVUQscUJBQWdCLEdBQUcsR0FBRyxFQUFFO1lBQ3BCLEdBQUcsQ0FBQyxzREFBc0QsQ0FBQyxDQUFBO1lBQzNELDJCQUEyQjtZQUMzQixrQkFBUSxDQUFDLE9BQU8sQ0FBQyx1Q0FBdUMsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDO2lCQUN6RSxJQUFJLENBQUMsR0FBRSxFQUFFO2dCQUNOLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO1lBQy9CLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUMsRUFBRTtnQkFDVixNQUFNLFlBQVksR0FBRyxDQUFDLENBQUE7Z0JBQ3RCLEdBQUcsQ0FBQyxnREFBZ0QsRUFBRSxJQUFJLENBQUMsS0FBSyxVQUFVLFlBQVksWUFBWSxFQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4RyxVQUFVLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQTtZQUMxRCxDQUFDLENBQUMsQ0FBQTtRQUNWLENBQUMsQ0FBQTtRQW5CRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsV0FBVztRQUNQLE9BQU8sa0JBQVEsQ0FBQztJQUNwQixDQUFDO0NBZUo7QUFFRCxrQkFBZSxJQUFJLGVBQWUsRUFBRSxDQUFDIn0=