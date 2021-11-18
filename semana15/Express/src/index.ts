import express, {Express} from "express"
import cors from "cors"
import { countries } from "./data"
import { country } from "./types"

const app: Express = express()

app.use(express.json())
app.use(cors())

// Encontrar todos os Países por id e nome
app.get("/countries", (req, res)=>{
    const resultado = countries.map(countrys => ({
        id: countrys.id,
        name: countrys.name
      }))
      
     res.status(200)
     res.send(resultado)
})

// Encontrar País por filtros
app.get("/countries/search", (req, res) =>{
    
    let result: country[] = countries

   
    if (req.query.name) {
        result = result.filter(
           country => country.name.includes(req.query.name as string)
        )
     }else if (req.query.capital) {
        result = result.filter(
           country => country.capital.includes(req.query.capital as string)
        )
     }else if (req.query.continent) {
        result = result.filter(
            country => country.continent.includes(req.query.continent as string)
        )
     }else{

         res.status(404).send("País não encontrado")
     }

     res.status(200).send(result)

    
})

// Editar País
app.put("/countries/:id", (req, res)=>{
    try{
        const id = req.params.id
        const result = countries.find((country) => country.id === Number(id))

        const newResult = {
            id: result?.id,
            name: req.body.name,
            capital: req.body.capital,
            continent: result?.continent
        }

        if(result === undefined){
            throw new Error ("Nenhum resultado encontrado")
        }

        result.name = newResult.name

    }catch(error: any){
        res.status(400).send({message: error.message})
    }

})


// Encontrar País por id
app.get("/countries/:id", (req, res) =>{
    
    const id = req.params.id
    const resultado = countries.find((countrys)=>{
        return countrys.id === Number(id)
    })

    if(resultado){
        res.status(200)
        res.send(resultado)
    }else {
        res.status(404)
        res.send("País não encontrado!")
    }
})




app.listen(3003, ()=>{
    console.log("Servidor Pronto!")
})