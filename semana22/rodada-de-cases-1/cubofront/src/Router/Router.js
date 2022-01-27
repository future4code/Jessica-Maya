import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './../Page/Home/Home'
import {Error }from './../Page/Error/Error'

export const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    </BrowserRouter>
}
