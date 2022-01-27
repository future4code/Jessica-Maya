import { useRequestData } from "../../hooks/useRequestData"
import { GlobalContext } from "./GlobalContext"
import { BASE_URL } from "../../contants/url"

const GlobalState = ({ children }) => {
    const [users, requestUser] =
        useRequestData([], `${BASE_URL}/user/all`)

    const states = { users }
    const request = { requestUser }
    return <GlobalContext.Provider value={{ states, request}}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalState