import express,{ Application } from "express";
import { CommonRoutesConfig } from "../common/routes.config"
import JwtMiddleware from "../auth/middleware/jwt.middleware";
import citiesControllers from "./controller/cities.controllers";

export class CitiesRoutes extends CommonRoutesConfig{
    constructor(app:express.Application){
        super(app, 'CitiesRoutes')
    }

    configureRoutes(): Application {
        
        this.app.route('/cities')
            .all(JwtMiddleware.validJWTNeeded)
            .post(JwtMiddleware.validJWTNeeded, citiesControllers.createCity)
            .get(JwtMiddleware.validJWTNeeded, citiesControllers.getCityById)

        this.app.route('/cities/all').get(citiesControllers.getAll)

        return this.app
    }

}