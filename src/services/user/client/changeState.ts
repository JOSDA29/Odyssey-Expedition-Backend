import ChangeState from "../../../repository/user/client/changeState";

class ChangeStatee {
    static async changeState(state: boolean, email: string){
        return await ChangeState.ChangeState(email, state);
    }
}

export default ChangeStatee;