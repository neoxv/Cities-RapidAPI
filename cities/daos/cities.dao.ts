import { CreateCityDto } from "../dto/create.city.dto";
import MongooseService from "../../common/services/mongoose.service";
import debug from "debug";
import mongooseService from "../../common/services/mongoose.service";

const log: debug.IDebugger = debug('app:dao')

class CitiesDao{
    Schema = MongooseService.getMongoose().Schema;
    citySchema = new this.Schema({
        id:String,
        wikiDataId:String,
        type:String,
        city:String,
        name:String,
        country:String,
        countryCode:String,
        region:String,
        regionCode:String,
        latitude:Number,
        longitude:Number,
        population:Number,
        userId:{type: this.Schema.Types.ObjectId, ref: 'User'}
    })

    City = mongooseService.getMongoose().model('Cities', this.citySchema);
    constructor(){
        log('Created new instance of CitiesDao');
    }

    async addCity(newCity: CreateCityDto){
        const city = new this.City(newCity)
        await city.save()
        return 
    }

    async getCitiesByUserId(id: string){
        return await this.City.find({userId:id})        
    }

    async getAll(){
        return await this.City.find();
    }
}

export default new CitiesDao();