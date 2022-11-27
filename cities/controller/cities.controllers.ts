import express from 'express'
import citiesServices from '../services/cities.services'
import debug from 'debug'

const log:debug.IDebugger = debug('app:cities-controllers')

class CitiesController{
    async createCity(req:express.Request, res:express.Response){
        await citiesServices.create(req.body)
        res.status(201).send()
    }

    async getCityById(req:express.Request, res:express.Response){
        const userId = req.body.userId
        const cities = await citiesServices.getCitiesByUser(userId)
        res.status(200).send(cities)
    }  

    async getAll(req:express.Request, res:express.Response){
        const cities = await citiesServices.getAll()
        res.status(200).send(cities)
    }
    
}

export default new CitiesController();