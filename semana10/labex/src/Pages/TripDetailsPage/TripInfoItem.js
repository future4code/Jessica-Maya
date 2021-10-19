import React from 'react'

const TripInfoItem = (props) => {
  return <div>
    <strong>{props.infoName}</strong>: <p>{props.info}</p>
  </div>
}

export default TripInfoItem