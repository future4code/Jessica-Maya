import React from "react";

export const HomePage = (props)=>{
    return(
        <div>
            HomePage
            <button onClick={()=> props.mudarTelas()}>Ir para Matches</button>
      <button>Limpar matches</button>
        </div>
    )
}
