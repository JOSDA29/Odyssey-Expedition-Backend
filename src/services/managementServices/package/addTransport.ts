import addTransportService from "../../../repository/managementServices/package/addTransport";


class addTransport {
    static async addTransport(idTransport:string, idPackage:number, numberOfPeople:number) {
        try {
            const result = addTransportService.addService(idTransport, idPackage, numberOfPeople);
            return result;
        } catch (error) {
            console.error('Internal error when trying add service to package.' + (error as Error).stack);
            throw new Error('Internal error when trying add service to package.' + (error as Error).message);
        }
       
    }
}

export default addTransport;