import deleteServiceS from "../../../repository/managementServices/package/deleteService";


class DeleteService {
    static async deleteService(idPackage:number, idHotel:number, idTransport:string) {
        try {
            const result =  await deleteServiceS.deleteService(idPackage, idHotel, idTransport);
            console.log(result);
            
            return result;
        } catch (error) {
            console.error('Internal error when trying delete service to package.' + (error as Error).stack);
        throw new Error((error as Error).message);
        }
       
    }
}

export default DeleteService;