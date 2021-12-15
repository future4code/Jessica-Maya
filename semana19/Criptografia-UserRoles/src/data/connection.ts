import knex from "knex";
import dotenv from "dotenv";

dotenv.config();


 export const connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
    },
  });

	export const userTableName = "Users";


	export const getUserById = async(id: string): Promise<any> => {
		const result = await connection
		  .select("*")
		  .from(userTableName)
		  .where({ id });
	
		return result[0];
	  }
	

	  export class AuthenticationData  {
        [x: string]: any;
		
		getData  = (
			id: string
			) => {
			const result = connection
			  .select("*")
			  .from(userTableName)
			  .where({ id });
		
			return result;
		  }

		createUser = (
			id: string, 
			email: string, 
			password: string) => {
		   connection
			.insert({
			  id,
			  email,
			  password,
			})
			.into(userTableName);
		};
	
	} 