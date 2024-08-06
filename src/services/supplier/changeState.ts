import ChangeStateRepository from "../../repository/supplier/changeState";

class ChangeState {
    static async changeState(email: string, state:boolean){
        const result = await ChangeStateRepository.changeState(email, state);
        if (result?.rowCount! > 0) {
            return true;
        }
        return false; 
    }
}

export default ChangeState;