import { CRUD } from "../../common/crud.interface";
import { CreateUserDto } from "../dto/create.user.dto";
import { PatchUserDto } from "../dto/patch.user.dto";
import { PutUserDto } from "../dto/put.user.dto";
import UsersDao from "../daos/users.dao";


class UsersService implements CRUD{
    async create(resource: CreateUserDto) {
        return UsersDao.addUser(resource);
    }

    async deleteById(id: string) {
        return UsersDao.removeUserById(id);
    }

    async list(limit: number, page: number) {

    }

    async patchById(id: string, resource: PatchUserDto) {
        return UsersDao.updateUserById(id, resource);
    }

    async getById(id: string) {
        return UsersDao.getUserById(id); 
    }

    async getByEmail(email: string) {
        return UsersDao.getUserByEmail(email);
    }

    async getCredentials(email:string){
        return UsersDao.getUserCredentials(email)
    }

    async putById(id: string, resource: PutUserDto) {
        return UsersDao.updateUserById(id, resource);
    }
    
}

export default new UsersService();