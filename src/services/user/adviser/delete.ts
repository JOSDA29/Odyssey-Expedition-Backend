import Delete from '../../../repository/user/adviser/delete';

class DeleteAdviser {
    public static async deleteAdviser(email: string) {
        const result = await Delete.deleteAdviser(email);
        return { message: result.message };
    }
}

export default DeleteAdviser;
