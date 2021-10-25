import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import SingUpPage from '../pages/SingUpPage/SingUpPage'
import AddListPost from "../pages/AddListPost/AddListPost"
import PostPage from "../pages/PostPage/PostPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import Header from "../components/Header/Header"

const Router = () =>{
    return (
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/">
                <LoginPage/>
            </Route>
            <Route exact path="/cadastro">
                <SingUpPage/>
            </Route>
            <Route exact path="/posts">
                <PostPage/>
            </Route>
            <Route exact path="/adicionar-post">
                <AddListPost/>
            </Route>
            <Route>
                <ErrorPage/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}
export default Router