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
        return this.app
    }

}