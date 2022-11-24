import express,{ Application } from "express";
import { CommonRoutesConfig } from "../common/routes.config"

export class UserRoutes extends CommonRoutesConfig{
    constructor(app:express.Application){
        super(app, 'UserRoutes')
    }

    configureRoutes(): Application {

        this.app.route('/users')
            .get((req:express.Request, res:express.Response)=>{
                res.status(200).send("List of users");
            })
            .post((req:express.Request, res:express.Response)=>{
                res.status(200).send("Post to users");
            })
        
        this.app.route('users/:id')
            .all((req:express.Request, res:express.Response, next:express.NextFunction)=>{
                next();
            })
            .get((req:express.Request, res:express.Response)=>{
                res.status(200).send(`get user by id:${req.params.id}`);
            })
            .post((req:express.Request, res:express.Response)=>{
                res.status(200).send(`post user by id:${req.params.id}`);
            })
            .put((req:express.Request, res:express.Response)=>{
                res.status(200).send(`put user by id:${req.params.id}`);
            })
            .patch((req:express.Request, res:express.Response)=>{
                res.status(200).send(`patch user by id:${req.params.id}`);
            })
            .delete((req:express.Request, res:express.Response)=>{
                res.status(200).send(`delete user by id:${req.params.id}`);
            })


        return this.app
    }

}