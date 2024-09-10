import DeleteRepository from '../../../repository/managementServices/hotel/delete';
class Delete {
    static async delete(id: number, email: string){
        const result = await DeleteRepository.delete(id, email);
        return { message: result.message };
    }
}

export default Delete;