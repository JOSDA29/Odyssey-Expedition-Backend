import DeleteRepository from "../../repository/supplier/delete";

class Delete {
    static async deleteSupplier(email: string){
        const result = await DeleteRepository.deleteSupplier(email);
        if (result.rowCount!>0) {
            return true;
        }
        return false;
    }
}

export default Delete;