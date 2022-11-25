import express from 'express'
import UsersServices from '../../users/services/users.services'
import bcrypt from 'bcrypt'
import { PutUserDto } from '../../users/dto/put.user.dto';

class AuthMiddleware{
    async verifyUserPassword(req: express.Request, res: express.Response, next: express.NextFunction){
        const user = await UsersServices.getCredentials(req.body.email);
        if (user) {
            const passwordHash = user.password;
            if (await bcrypt.compare(req.body.password, passwordHash! )){
                req.body = {
                    id: user._id,
                    email: user.email
                };
                return next();
            }
        }
        res.status(400).send({ errors: ['Invalid email and/or password'] });
    }
}

export default new AuthMiddleware();
