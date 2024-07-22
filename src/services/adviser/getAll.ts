import getAll from '../../repository/user/adviser/getAll';

class getService {
    static async getAll() {
        return getAll.getAll();
    }
}

export default getService;
