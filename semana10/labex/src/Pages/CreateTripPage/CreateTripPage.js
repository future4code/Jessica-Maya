import {ContainerInputs, Select, Input, Button, ContainerButton} from "./styled"
import { useHistory } from "react-router-dom"
import React,{useState} from 'react'
import axios from 'axios'

const CreateTripPage =() =>{
    const token = localStorage.getItem('token')
    const planets = [ "Mercúrio", "Vênus","Terra","Marte", "Jupiter", "Saturno", "Urano", "Netuno", "Plutão"]
    const [name, setName]=useState('')
    const [date, setDate]=useState('')
    const [description, setDescription]=useState('')
    const [durationInDays, setDurationInDays]=useState('')
    const [planet, setPlanet]=useState('')

    const history = useHistory()
    const goToAdmin = () =>{
        history.push("/admin/trips/list")
    }

    const handleName = (event)=> {
        setName(event.target.value)
    }
    const handleDate= (event) => {
        setDate(event.target.value)
    }
    const handleDescription = (event) => {
        setDescription(event.target.value)
    }
    const handleDuration = (event) => {
        setDurationInDays(event.target.value)
    }
    const handlePlanet = (event) => {
        setPlanet(event.target.value)
    }


    const CreateTrip = () =>{
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/jessica-bento-maryam/trips'
        const body = {
            name: name,
            planet: planet,
            date: date,
            description: description,
            durationInDays: Number(durationInDays)
        }
        console.log(body)
        const headers = {
            headers: {
            auth: token
            }}
        axios.post(url,body, headers)
        .then((res)=>{
            alert('Viagem criada com sucesso!')
        })
        .catch((error)=>{
            console(error.response)
        })
    }
    return (
        <div>
            <h1>Criar Viagem</h1>
            <ContainerInputs>
            <Input
            placeholder={"Nome"}
            value={name}
            onChange={handleName}
            required
            />
            <Select name={'planet'}
            defaultValue={''}
             onChange={handlePlanet} required>
                <option value={''} disabled>Escolha um Planeta</option>
                {planets.map((planet)=>{
                    return <option key={planet}>{planet}</option>
                })}
           </Select>
           <Input
            type={"date"}
            name={'date'}
            value={date}
            onChange={handleDate}
            required/>

           <Input
           placeholder={"Descrição"}
           value={description}
           name={'description'}
           onChange={handleDescription}
           pattern={"^.{30,}$"}
            title={"O nome deve ter no mínimo 30 caracteres"}
           />
           <Input type={"Number"}
           name={'durationInDays'}
           value={durationInDays}
           onChange={handleDuration}
           placeholder="Duração da Viagem"
           min={40}
           required
           />
           </ContainerInputs>
           <ContainerButton>
           <Button onClick={CreateTrip}>Criar</Button>
           <Button onClick={goToAdmin}>Voltar</Button>
           </ContainerButton>
        </div>
    )
}
export default CreateTripPage