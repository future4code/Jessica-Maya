 import {ContainerHeader} from './styled'
 import { useHistory } from "react-router-dom"
 const Header = () => {
    const history = useHistory()

    const goToHome = () =>{
        history.push("/")
    }

    return (


     <ContainerHeader>LabeX
       <button onClick={goToHome}>Home</button>
    </ContainerHeader>
    
    )
}
export default Header
