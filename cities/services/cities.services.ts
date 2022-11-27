import { CreateCityDto } from "../dto/create.city.dto";
import CitiesDao from "../daos/cities.dao";


class CitiesService{
    async create(resource: CreateCityDto) {
        return CitiesDao.addCity(resource);
    }

    async getCitiesByUser(id: string) {
        return CitiesDao.getCitiesByUserId(id);
    }

    async getAll(){
        return CitiesDao.getAll();
    }
}

export default new CitiesService();