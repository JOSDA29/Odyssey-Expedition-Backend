import bcrypt from 'bcryptjs';

const compareHash = async (
    data: string,
    dataToCompare: string,
): Promise<boolean> => {
    const isPasswordValid = await bcrypt.compare(data, dataToCompare);
    return isPasswordValid;
};

export default compareHash;
