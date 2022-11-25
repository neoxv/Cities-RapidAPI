import express,{ Application } from "express";
import { CommonRoutesConfig } from "../common/routes.config"
import UsersControllers from "./controller/users.controllers";
import UsersMiddleware from "./middleware/users.middleware";
import BodyValidationMiddleware from '../common/middleware/validation.middleware'
import { body } from "express-validator";
import AuthMiddleware from "../auth/middleware/auth.middleware";
import JwtMiddleware from "../auth/middleware/jwt.middleware";

export class UserRoutes extends CommonRoutesConfig{
    constructor(app:express.Application){
        super(app, 'UserRoutes')
    }

    configureRoutes(): Application {

        this.app.route('/users/register')
            .post(
                body('username').isString().isLength({min:3}),
                body('email').isEmail(),
                body('password').isLength({min:8}).withMessage('Must include password (8+ characters)'),
                BodyValidationMiddleware.verifyBodyFieldsErrors,
                UsersMiddleware.validateSameEmailExists,
                UsersControllers.createUser)
                
        this.app.param(`id`, UsersMiddleware.extractUserId)
        
        this.app.route('/users/:id')
            .all(JwtMiddleware.validJWTNeeded,UsersMiddleware.validateUserExists)
            .get(UsersControllers.getUserById)
            .delete(JwtMiddleware.validJWTNeeded, UsersControllers.delete)


        return this.app
    }

}