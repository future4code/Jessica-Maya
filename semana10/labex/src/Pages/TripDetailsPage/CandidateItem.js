import React from 'react'

const CandidateItem =(props) =>{
    const approveCandidate = () =>{
        props.decideCandidate(true, props.candidate.id)
    }

    const rejectCandidate = () =>{
        props.decideCandidate(false, props.candidate.id)
    }
    return (
        <div>
            <p>{props.candidate.name}</p>
            <button onClick={approveCandidate}>Aprovar</button>
            <button onClick={rejectCandidate}>Reprovar</button>
            
        </div>
)
    
}
export default CandidateItem