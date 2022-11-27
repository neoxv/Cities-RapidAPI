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
const debug_1 = __importDefault(require("debug"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_1 = __importDefault(require("crypto"));
const log = (0, debug_1.default)('app:auth-controller');
class AuthController {
    createJWT(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const jwtSecret = process.env.JWT_SECRET;
            const tokenExpirationInSeconds = 3600;
            try {
                const refreshId = req.body.id + jwtSecret;
                const salt = crypto_1.default.createSecretKey(crypto_1.default.randomBytes(16));
                const hash = crypto_1.default.createHmac('sha512', salt).update(refreshId).digest('base64');
                req.body.refreshKey = salt.export();
                log(`this is the jwt secret ${jwtSecret}`);
                const token = jsonwebtoken_1.default.sign(req.body, jwtSecret, {
                    expiresIn: tokenExpirationInSeconds
                });
                res.status(201).send({ accessToken: token, refreshToken: hash });
            }
            catch (error) {
                log('createJWT error:%O', error);
                res.status(500).send();
            }
        });
    }
}
exports.default = new AuthController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYXV0aC9jb250cm9sbGVycy9hdXRoLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrREFBeUI7QUFDekIsZ0VBQThCO0FBQzlCLG9EQUEyQjtBQUczQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMscUJBQXFCLENBQUMsQ0FBQztBQUcxRCxNQUFNLGNBQWM7SUFDVixTQUFTLENBQUMsR0FBbUIsRUFBRSxHQUFvQjs7WUFDckQsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFXLENBQUE7WUFDekMsTUFBTSx3QkFBd0IsR0FBRyxJQUFJLENBQUM7WUFFdEMsSUFBSTtnQkFDQSxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUE7Z0JBQ3pDLE1BQU0sSUFBSSxHQUFHLGdCQUFNLENBQUMsZUFBZSxDQUFDLGdCQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVELE1BQU0sSUFBSSxHQUFHLGdCQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUNqRixHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7Z0JBQ25DLEdBQUcsQ0FBQywwQkFBMEIsU0FBUyxFQUFFLENBQUMsQ0FBQTtnQkFDdEMsTUFBTSxLQUFLLEdBQUcsc0JBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUM7b0JBQ3ZDLFNBQVMsRUFBRSx3QkFBd0I7aUJBQ3RDLENBQUMsQ0FBQTtnQkFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUE7YUFDdEU7WUFBQyxPQUFNLEtBQUssRUFBQztnQkFDVixHQUFHLENBQUMsb0JBQW9CLEVBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQzlCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7YUFDMUI7UUFDTCxDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksY0FBYyxFQUFFLENBQUMifQ==