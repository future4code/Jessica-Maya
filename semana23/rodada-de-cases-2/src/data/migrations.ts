import { BaseDataBase } from "./BaseDataBase";

class Migrations extends BaseDataBase {

    async createTable() {
        await this.getConnection().raw(`
            create table amaro_product(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            size VARCHAR(255) NOT NULL,
            price INT NOT NULL,
            );

            create table amaro_tags(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL
            );

            create table amaro_product_tags(
                id_product VARCHAR(255),
                id_tags VARCHAR(255),
                primary key(id_product , id_tags),
                foreign key (id_product) references amaro_product(id),
                foreign key (id_tags) references amaro_tags(id)
                );
        `)
        console.log("Table created successfully")
    }
}

const createTableMigration = new Migrations()
createTableMigration.createTable() 