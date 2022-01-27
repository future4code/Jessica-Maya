import { connection } from "../connection";


export const getUserAll = async (): Promise<any[]> => {

    try {

        const users: any = [];

        const result = await connection()
            .select("id", "name", "email", "role")
            .from("User_Arq");

                    for(let user of result){
                            users.push(user);
                    }

        return users;

    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message);
    }

}
