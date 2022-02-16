import { BaseDataBase } from "./BaseDataBase";

class Migrations extends BaseDataBase {

    async createTable() {
        await this.getConnection().raw(`
        CREATE TABLE IF NOT EXISTS dogWalking_pet(
            id VARCHAR(255) PRIMARY KEY NOT NULL,
            name_owner VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            name_pet VARCHAR(255) NOT NULL
        );
        CREATE TABLE IF NOT EXISTS dogWalking_tour(
            id VARCHAR(255) PRIMARY KEY NOT NULL,
            date_walk DATE NOT NULL,
            duration VARCHAR(255) NOT NULL,
            latitude VARCHAR(255) NOT NULL,
            longitude VARCHAR(255) NOT NULL,
            start_time VARCHAR(255) NOT NULL,
            end_time VARCHAR(255) NOT NULL,
            status VARCHAR(255),
            price INT ,
            pet_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (pet_id) REFERENCES dogWalking_pet(id)
        );
        `)
        console.log("Table created successfully")
    }
}

const createTableMigration = new Migrations()
createTableMigration.createTable() 