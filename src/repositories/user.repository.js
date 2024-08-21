import { UserModel } from "../daos/mongodb/models/user.model.js";

export class UserRepository {
    async findByEmail(email) {
        return UserModel.findOne({ email });
    }
}
