import uploadImageRepository from '../../../repository/user/adviser/uploadImage';

class uploadImage {
    static async upload (email: string, file: string) {
        try {
            const results = await uploadImageRepository.uploadRepo(email, file);

            if(results === 0) {
                return { success: true, message: 'No Image found matching the criteria.'}
            }

            return { success: true, data: results};
        } catch (error) {
            console.error('Error filtering packages:', error);
            throw new Error('Internal error when trying to upload image.');
        }
    }
}

export default uploadImage;