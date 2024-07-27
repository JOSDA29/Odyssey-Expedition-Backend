import getAll from '../../../repository/user/client/getAll';

class getService {
    static async getAll() {
        return getAll.getAll();
    }
}

export default getService;
