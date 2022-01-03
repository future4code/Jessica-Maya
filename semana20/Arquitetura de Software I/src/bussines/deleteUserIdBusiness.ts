import { deleteUser } from "../data/deleteUser";
import { getData } from "../data/getData";


export const deleteUserIdBusiness = async(
    input: {id:string, token:string}
): Promise<void> =>  {
    const verifiedToken = getData(input.token);

				if(verifiedToken.role == "NORMAL"){
					throw new Error("Apenas administradores podem deletar usuários!")
				}

        return await deleteUser(input.id);
        

}