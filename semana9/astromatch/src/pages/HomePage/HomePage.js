import React from "react";
import styled from "styled-components";

const CardMatch = styled.div`
    display:flex;   
    justify-content:center;
    flex-direction:column;
    align-items: center;
    border: 1px solid black;
    height: 70vh;
    width: 20vw;
`

const HomePage = (props)=>{
    return(
        <div>
        <CardMatch>
        <h1>Adao</h1>
        <p>Loren Ipsum</p>
        <button>X</button>
        <button>add</button>
        <button onClick={()=> props.changePage("1")}>Matches</button>
        </CardMatch>
      
      <button>Limpar matches</button>
        </div>
    )
}
export default HomePage
