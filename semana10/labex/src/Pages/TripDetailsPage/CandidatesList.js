import React from 'react'
import CandidateItem from './CandidateItem';


const CandidatesList = (props) => {
  return (

  <div>
    <div>
      <h1>Lista de Candidatos</h1>
      <div>
        {props.candidates.map(candidate => {
          return <CandidateItem candidate={candidate} decideCandidate={props.decideCandidate}/>
        })}
      </div>
    </div>
  </div>
  )
}

export default CandidatesList