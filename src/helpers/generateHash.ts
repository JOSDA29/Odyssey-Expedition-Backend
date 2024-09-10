import bcrypt from 'bcryptjs';

const generateHash = async (data: string) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(data, salt);
};

export default generateHash;
