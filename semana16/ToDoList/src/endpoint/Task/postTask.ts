import { Request, Response } from "express"
import { connection } from "../../data/connection"

export const postTask = async(
    req: Request,
     res: Response
     ) => {
        try {
        const id = Date.now().toString()
        let { title, description, limit_date, creator_user_id } = req.body
    
        if (!title || !description || !limit_date || !creator_user_id) {
            res.statusCode = 422 
            throw new Error(`Please, complete the fields "title", "description", "limitDate" and "creator_user_id"...`)
        }
    
        const formatDefaultDate = (data: any) => {
            let arrayDate = data && data.split("/")
            let [year, month, day] = [arrayDate && arrayDate[2], arrayDate && arrayDate[1], arrayDate && arrayDate[0]]
            let usefullDate = `${year}-${month}-${day}`
            return usefullDate
        }
        formatDefaultDate(limit_date)
    
        const formatDate = (): any => {
            const todayDate = new Date().toISOString();
            let nwd = todayDate && todayDate.split("-");
            let [year, month, newdt] = [nwd && nwd[0], nwd && nwd[1], nwd && nwd[2].split("T")];
            let [day, newHour] = [newdt && newdt[0], newdt && newdt[1].split(".")];
            let moment = newHour && newHour[0];
            let time: any = moment && moment.split(":");
            let hour = time && time[0] - 3;
            if (hour < 0) { hour = hour + 3 }
            let currentData: string = `${year}-${month}-${day}`;
            return (currentData)
        };
        const date = formatDate()
        limit_date = formatDefaultDate(limit_date)
    
        if (formatDefaultDate(limit_date).valueOf() < date.valueOf()) {
            res.statusCode = 422
            throw new Error(`A deadline must be later than the current date.`)
        }
    
        await connection("Task").insert({ id, title, description, limit_date, creator_user_id })
        res.status(200).send("Task created successfully")
    
    } catch (error: any) {
        if(res.statusCode === 200){
            res.status(500).send("Ocorreu um erro inesperado!")
        }else{
            res.send(error.message)
        }
    }
    }
    
    function currentData(currentData: any) {
    throw new Error("Function not implemented.");
    }