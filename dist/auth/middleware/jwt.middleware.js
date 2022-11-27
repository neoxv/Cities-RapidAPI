"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JwtMiddleware {
    // private jwtSecret: string = process.env.JWT_SECRET!
    // verifyRefreshBodyField(req: express.Request, res: express.Response, next:express.NextFunction){
    //     if(req.body && req.body.refreshToken){
    //         return next()
    //     }else{
    //         return res.status(400).send({errors: [{msg:'Missing required field: refreshToken'}]})
    //     }
    // }
    // async validRefreshNeeded(req: express.Request, res: express.Response, next:express.NextFunction){
    //     const user = await usersServices.getById(res.locals.jwt.id)
    //     const salt = crypto.createSecretKey(Buffer.from(res.locals.jwt.refreshKey.data))
    //     const hash= crypto.createHmac('sha512',salt).update(res.locals.jwt.id + this.jwtSecret).digest('base64');
    //     if(hash == req.body.refreshToken){
    //         req.body = {
    //             id: user?._id,
    //             email: user?.email
    //         }
    //         return next()
    //     }else{
    //         return res.status(400).send({errors: [{msg:'Invalid refresh token'}]})
    //     }
    // }
    validJWTNeeded(req, res, next) {
        if (req.headers['authorization']) {
            try {
                const authorization = req.headers['authorization'].split(' ');
                if (authorization[0] !== 'Bearer') {
                    return res.status(401).send();
                }
                else {
                    const decodedToken = jsonwebtoken_1.default.verify(authorization[1], process.env.JWT_SECRET);
                    if (typeof decodedToken !== 'string') {
                        req.body.userId = decodedToken.id;
                        next();
                    }
                }
            }
            catch (error) {
                return res.status(403).send();
            }
        }
        else {
            return res.status(401).send();
        }
    }
}
exports.default = new JwtMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0Lm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9hdXRoL21pZGRsZXdhcmUvand0Lm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxnRUFBOEI7QUFJOUIsTUFBTSxhQUFhO0lBQ2Ysc0RBQXNEO0lBRXRELGtHQUFrRztJQUNsRyw2Q0FBNkM7SUFDN0Msd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixnR0FBZ0c7SUFDaEcsUUFBUTtJQUNSLElBQUk7SUFFSixvR0FBb0c7SUFDcEcsa0VBQWtFO0lBQ2xFLHVGQUF1RjtJQUN2RixnSEFBZ0g7SUFFaEgseUNBQXlDO0lBQ3pDLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IsaUNBQWlDO0lBQ2pDLFlBQVk7SUFFWix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLGlGQUFpRjtJQUNqRixRQUFRO0lBQ1IsSUFBSTtJQUVMLGNBQWMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBeUI7UUFDaEYsSUFBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUFDO1lBQzVCLElBQUk7Z0JBQ0EsTUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlELElBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBQztvQkFDN0IsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNqQztxQkFBSTtvQkFDRCxNQUFNLFlBQVksR0FBSSxzQkFBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFXLENBQUMsQ0FBQztvQkFDM0UsSUFBRyxPQUFPLFlBQVksS0FBSyxRQUFRLEVBQUM7d0JBQ2hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxFQUFFLENBQUE7d0JBQ2pDLElBQUksRUFBRSxDQUFBO3FCQUNUO2lCQUNKO2FBQ0o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7YUFDaEM7U0FDSjthQUFJO1lBQ0QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztDQUNKO0FBRUQsa0JBQWUsSUFBSSxhQUFhLEVBQUUsQ0FBQyJ9