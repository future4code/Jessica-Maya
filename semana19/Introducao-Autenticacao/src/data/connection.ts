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

	export const createUser = async (
		id: string, 
		email: string, 
		password: string) => {
	  await connection
	    .insert({
	      id,
	      email,
	      password,
	    })
	    .into(userTableName);
	};

	export const getUserByEmail = async(
		email: string
		): Promise<any> => {
		const result = await connection
		  .select("*")
		  .from(userTableName)
		  .where({ email });
	 
		return result[0];
	}

	export const getUserById = async(id: string): Promise<any> => {
		const result = await connection
		  .select("*")
		  .from(userTableName)
		  .where({ id });
	
		return result[0];
	  }
	