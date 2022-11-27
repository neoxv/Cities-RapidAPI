import express from 'express'
import usersServices from '../services/users.services'
import debug from 'debug'

const log:debug.IDebugger = debug('app:users-middleware')

class UsersMiddleware{
    async validateUserExists(req:express.Request, res:express.Response, next:express.NextFunction){
        const user = await usersServices.getById(req.params.id)
        if(user){
            next();
        }else{
            res.status(400).send({errors: [{msg:`User ${req.params.id} not found`}]})
        }
    }

    async validateSameEmailExists(req:express.Request, res:express.Response, next:express.NextFunction){
        const user = await usersServices.getByEmail(req.body.email)
        if(!user){
            next();
        }else{
            res.status(400).send({errors:[{msg:`User email already exists`}] })
        }
    }

    async extractUserId(req: express.Request, res: express.Response, next: express.NextFunction) {
        req.body.id = req.params.id;
        next();
    }
}

export default new UsersMiddleware();