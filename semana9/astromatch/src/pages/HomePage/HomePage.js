import React from "react";

const HomePage = (props)=>{
    return(
        <div>
              
            <div>
            <button onClick={()=> props.changePage("0")}>Home</button>
            <button onClick={()=> props.changePage("1")}>Matches</button>
            </div>
      <button>Limpar matches</button>
        </div>
    )
}
export default HomePage
