import React from "react";
import styled from "styled-components";

const Cardlista = styled.div`
    display:flex;   
    justify-content:center;
    flex-direction:column;
    align-items: center;
    border: 1px solid black;
    height: 70vh;
    width: 20vw;
`

const MatchesPage = (props)=>{
    return(
        <div>
        <Cardlista>
            Ana Maria
            <button onClick={()=> props.changePage()}>Home</button>
        </Cardlista>
        </div>
    )
}
export default MatchesPage