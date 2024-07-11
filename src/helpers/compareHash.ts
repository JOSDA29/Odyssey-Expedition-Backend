import bcrypt from 'bcryptjs';

let compareHash = async(data: string, dataToCompare: string): Promise<boolean> =>{
    let isPasswordValid = await bcrypt.compare(data, dataToCompare);
    return isPasswordValid
}

export default compareHash;