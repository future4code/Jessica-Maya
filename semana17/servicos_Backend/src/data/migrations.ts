import { connection } from "./connection"
import users from "./users.json"
import { getAddressInfo } from '../services/getAddressInfo'

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection.raw(`
      CREATE TABLE IF NOT EXISTS aula51_users (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         nickname VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         address VARCHAR(255) NOT NULL
      );
      CREATE TABLE IF NOT EXISTS aula51_addressInfo(
         cep VARCHAR(255) UNIQUE PRIMARY KEY,
         logradouro VARCHAR(255) NOT NULL,
         numero VARCHAR(255) NOT NULL,
         complemento VARCHAR(255) NOT NULL,
         bairro VARCHAR(255) NOT NULL,
         cidade VARCHAR(255) NOT NULL,
         estado VARCHAR(255) NOT NULL
      );
   `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

// const insertUsers = () => connection("aula51_users")
//    .insert(users)
//    .then(() => { console.log("Usuários criados") })
//    .catch(printError)


// const insertAddressInfo = () => connection("aula51_addressInfo")
//    .insert(async()=>{
//       const result = await getAddressInfo("06310320", "400", "casa")
//       console.log(result)
//       return result
//    })
//    .catch(printError)

   const insertAddressInfo = async () => {
      const address = await getAddressInfo("06310320", "400", "casa")
      await connection("aula51_addressInfo")
      .insert(address)
      .catch(printError)
   }
      
   
   const closeConnection = () => { connection.destroy() }
   
   createTables()
      .then(insertAddressInfo)
      .finally(closeConnection)
   

// const insertAddressInfoRaw = async ()=>{
//     const result = await getAddressInfo("06310320", "400", "casa")
//    await connection.raw(`
//    INSERT INTO 'maryam-jessica-bento'.aula_51_addressInfo(
//    cep,
//    logradouro,
//    numero,
//    complemento,
//    bairro,
//    cidade,
//    estado)
//    VALUES('${result.cep}',
//    '${result.logradouro},'
//    '${result.numero}',
//    '${result.complemento}',
//    '${result.bairro}',
//    '${result.cidade}',
//    '${result.estado}');
//    `)
   
// }


// createTables()
//    .then(() => {
//       insertAddressInfo()
//    })

