import express from 'express'
import debug from 'debug'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'


const log: debug.IDebugger = debug('app:auth-controller');


class AuthController{
    async createJWT(req:express.Request, res:express.Response){
        const jwtSecret = process.env.JWT_SECRET!
        const tokenExpirationInSeconds = 3600;

        try {
            const refreshId = req.body.id + jwtSecret
            const salt = crypto.createSecretKey(crypto.randomBytes(16));
            const hash = crypto.createHmac('sha512', salt).update(refreshId).digest('base64')
            req.body.refreshKey = salt.export()
            log(`this is the jwt secret ${jwtSecret}`)
                const token = jwt.sign(req.body, jwtSecret,{
                    expiresIn: tokenExpirationInSeconds
                })
                 res.status(201).send({accessToken: token, refreshToken: hash})
        } catch(error){
            log('createJWT error:%O',error)
             res.status(500).send()
        }
    }
}

export default new AuthController();