import React from 'react'
import {Switch, Route} from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import SingUpPage from '../pages/SingUpPage/SingUpPage'
import AddListPost from "../pages/AddListPost/AddListPost"
import PostPage from "../pages/PostPage/PostPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

const Router = ({setRightButtonText}) =>{
    return (
        <Switch>
            <Route exact path="/login">
                <LoginPage setRightButtonText={setRightButtonText}/>
            </Route>
            <Route exact path="/cadastro">
                <SingUpPage setRightButtonText={setRightButtonText}/>
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
    )
}
export default Router