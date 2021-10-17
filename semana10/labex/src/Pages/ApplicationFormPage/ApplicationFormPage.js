import {ContainerForm, ContainerButton,ContainerInput, Select, Input, Button} from "./styled"
import React, {useState, useEffect} from "react"
import { useHistory, useParams } from "react-router-dom"
import axios from 'axios'

const ApplicationFormPage =() =>{
    const history = useHistory()
    const [name, setName]=useState('')
    const [age, setAge]=useState('')
    const [applicationText, setApplicationText]=useState('')
    const [profession, setProfession]=useState('')
    const [trips, setTrips]=useState([])
    const [country, setCountry]=useState('')
    const countrys = ["Afghanistan", "Albania", "Algeria", "Andorra", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica","Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands","Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies","Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica","Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon","Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles",  "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland",  "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda",  "Ukraine", "United Arab Emirates", "United Kingdom","Uruguay", "Uzbekistan", "Venezuela","Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"]
    
    const {id} =useParams()

    const handleName = (event) =>{
        setName(event.target.value)
    }

    const handleAge = (event) =>{
        setAge(event.target.value)
    }

    const handleText = (event) =>{
        setApplicationText(event.target.value)
    }

    const handleProfrissao = (event) =>{
        setProfession(event.target.value)
    }

    const handleCountry = (event) =>{
        setCountry(event.target.value)
    }

    const Voltar =() =>{
        history.push('/')
    }

    useEffect (()=>{
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/jessica-bento-maryam/trips')
        .then((res)=>{
            setTrips(res.data.trips)
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }, [])

    const ApplyToTrip = () =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/jessica-bento-maryam/trips/${id}/apply`
        const body = {
            name: name,
            age: age,
            applicationText: applicationText,
            profession: profession,
            country: country
        }
        axios.post(url, body)
        .then((res)=>{
            alert("INSCRIÇÃO FEITA COM SUCESSO!")
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }


 return (
     <div>
          <ContainerForm>
                <h1>Inscreva-se para uma viagem</h1>
            <ContainerInput value={"list"}>
            <Select>
                <option>Escolha uma viagem</option>
                    {trips.map((trip)=>{
                     return <option value={trip}>{trip.name}</option>
           })}
            </Select>

            <Input type="name"
            placeholder="Nome"
            value={name}
            onChange={handleName}
            />

            <Input type= "Number"
            placeholder="Idade"
            value={age}
            pattern={age < 18}
            title={'Maior que 18 anos'}
            onChange={handleAge}
            requered
            />

            <Input type="text"
            placeholder="Texto de Candidatura"
            value={applicationText}
            onChange={handleText}
            />

            <Input
            placeholder="Profissão"
            value={profession}
            onChange={handleProfrissao}
            />
         
            <Select value={country} 
            onChange={handleCountry}
             required>
                 <option>Escolha um País</option>
             {countrys.map((country)=>{
                 return <option value={country}>{country}</option>
             })}
             </Select>

            <Button onClick={ApplyToTrip}>Criar</Button>
        </ContainerInput>
         <ContainerButton>
        <Button onClick={Voltar}>Voltar</Button>
        </ContainerButton>
        </ContainerForm>

     </div>
 )
}
 export default ApplicationFormPage

    
  