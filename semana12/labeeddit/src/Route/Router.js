import React from 'react'
import {Switch, Route, BrowserRouter} from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import SingUpPage from '../pages/SingUpPage/SingUpPage'
import DetalhePost from "../pages/DetalhePost/DetalhePost"
import PostPage from "../pages/PostPage/PostPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

const Router = () =>{
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/login">
                <LoginPage />
            </Route>
            <Route exact path="/cadastro">
                <SingUpPage />
            </Route>
            <Route exact path="/posts">
                <PostPage/>
            </Route>
            <Route exact path="/posts/:id/comments">
                <DetalhePost/>
            </Route>
            <Route>
                <ErrorPage/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}
export default Router