import express from 'express'
import { Jwt } from '../../common/types/jwt'
import crypto from 'crypto'
import UsersServices from '../../users/services/users.services'
import jwt from 'jsonwebtoken'
import usersServices from '../../users/services/users.services'


class JwtMiddleware{
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

   validJWTNeeded(req: express.Request, res: express.Response, next:express.NextFunction){
        if(req.headers['authorization']){
            try {
                const authorization = req.headers['authorization'].split(' ');
                if(authorization[0] !== 'Bearer'){
                    return res.status(401).send();
                }else{
                    const decodedToken =  jwt.verify(authorization[1],process.env.JWT_SECRET!);
                    if(typeof decodedToken !== 'string'){
                        req.body.userId = decodedToken.id
                        next()
                    }
                }
            } catch (error) {
                return res.status(403).send()
            }
        }else{
            return res.status(401).send();
        }
    }
}

export default new JwtMiddleware();