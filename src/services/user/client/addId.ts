import AddIdRepository from '../../../repository/user/client/AddId';
class addId {
    static async addID (email: string, id: string){
        return AddIdRepository.addId(email, id);
    }
}

export default addId