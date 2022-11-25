import { CreateUserDto } from "../dto/create.user.dto";
import { PutUserDto } from "../dto/put.user.dto";
import { PatchUserDto } from "../dto/patch.user.dto";
import MongooseService from "../../common/services/mongoose.service";
import debug from "debug";
import mongooseService from "../../common/services/mongoose.service";

const log: debug.IDebugger = debug('app:dao')

class UsersDao{
    Schema = MongooseService.getMongoose().Schema;
    userSchema = new this.Schema({
        username:String,
        email: String,
        password: {type: String, select: false}
    })

    User = mongooseService.getMongoose().model('Users', this.userSchema);
    constructor(){
        log('Created new instance of UsersDao');
    }

    async addUser(newUser: CreateUserDto){
        const user = new this.User(newUser)
        await user.save()
        return user._id
    }

    async getUserById(id: string){
        return await this.User.findById(id)        
    }

    async getUserByEmail(email:string){
        return await this.User.findOne({email:email})
    }

    async getUserCredentials(email: string){
        return this.User.findOne({email: email}).select('_id email +password')
    }

    async updateUserById(id:string, user:PatchUserDto | PutUserDto){
        return await this.User.findOneAndUpdate({_id: id}, user, {new: true})
    }

    async removeUserById(id:string){
        return this.User.deleteOne({_id: id})
    }
}

export default new UsersDao();