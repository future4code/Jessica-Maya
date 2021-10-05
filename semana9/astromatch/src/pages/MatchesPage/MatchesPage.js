import React from "react";

export const MatchesPage = (props)=>{
    return(
        <div>
            MatchesPage
            <button onClick={()=> props.changePage()}>Home</button>
        </div>
    )
}