import React from 'react'
import TripInfoItem from './TripInfoItem'

const TripInfoCard = (props) =>{
    const {name, planet, description, date, durationInDays} = props.info
    return <div>
        <div>
    <TripInfoItem infoName={'Nome'} info={name}/>
    <TripInfoItem infoName={'Planeta'} info={planet}/>
    <TripInfoItem infoName={'Data'} info={date}/>
    <TripInfoItem infoName={'Descrição'} info={description}/>
    <TripInfoItem infoName={'Duração em dias'} info={durationInDays}/>
     </div>
    </div>
}
export default TripInfoCard