import express from 'express'
import usersServices from '../services/users.services'
import debug from 'debug'
import bcrypt from 'bcrypt'
import jwtMiddleware from '../../auth/middleware/jwt.middleware'
import authController from '../../auth/controllers/auth.controller'

const log:debug.IDebugger = debug('app:users-controllers')

class UsersController{
    async createUser(req:express.Request, res:express.Response){
        req.body.password = await bcrypt.hash(req.body.password, 10)
        const userId = await usersServices.create(req.body)
        req.body = {
            id: userId
        }
        await authController.createJWT(req,res)
        // res.status(201).send({...tokens,_id: userId,refreshKey: req.body.refreshKey})
    }

    async getUserById(req:express.Request, res:express.Response){
        const user = await usersServices.getById(req.body.id)
        res.status(200).send(user)
    }  
    
    async patch(req:express.Request, res:express.Response){
        if(req.body.password){
            req.body.password = await bcrypt.hash(req.body.password, 10)
        }

        log(await usersServices.patchById(req.body.id, req.body))
        res.status(204).send()
    }

    async put(req:express.Request, res:express.Response){
        req.body.password = await bcrypt.hash(req.body.password,10);
        log(await usersServices.putById(req.body.id, req.body));
        res.status(204).send()
    }

    async delete(req:express.Request, res:express.Response){
        log(await usersServices.deleteById(req.body.id))
        res.status(204).send()
    }
}

export default new UsersController();