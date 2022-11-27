import { Application } from "express";
import { CommonRoutesConfig } from "../common/routes.config";
import { body } from "express-validator";
import BodyValidationMiddleware from '../common/middleware/validation.middleware'
import AuthMiddleware from './middleware/auth.middleware'
import AuthController from './controllers/auth.controller'
import express from 'express'
import JwtMiddleware from "./middleware/jwt.middleware";
import UsersMiddleware from "../users/middleware/users.middleware";
import UsersControllers from "../users/controller/users.controllers";

export class AuthRoutes extends CommonRoutesConfig{
    constructor(app:express.Application){
        super(app, 'AuthRoutes')
    }

    configureRoutes(): Application {
        this.app.post('/auth/register',[
            body('username').isString().isLength({min:3}),
            body('email').isEmail(),
            body('password').isLength({min:6}).withMessage('Password must include(6+ characters)'),
            BodyValidationMiddleware.verifyBodyFieldsErrors,
            UsersMiddleware.validateSameEmailExists,
            UsersControllers.createUser])
            
        this.app.post('/auth/login',[
            body('email').isEmail(),
            body('password').isString(),
            BodyValidationMiddleware.verifyBodyFieldsErrors,
            AuthMiddleware.verifyUserPassword,
            AuthController.createJWT
        ])

        // this.app.post('/auth/refresh-token',[
        //     JwtMiddleware.validJWTNeeded,
        //     JwtMiddleware.verifyRefreshBodyField,
        //     JwtMiddleware.validRefreshNeeded,
        //     AuthController.createJWT,
        // ])
        return this.app
    }
    
}