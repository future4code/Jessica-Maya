import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage"
import ApplicationFormPage from "../Pages/ApplicationFormPage/ApplicationFormPage"
import LoginPage from "../Pages/LoginPage/LoginPage"
import TripDetailsPage from "../Pages/TripDetailsPage/TripDetailsPage"
import CreateTripPage from "../Pages/CreateTripPage/CreateTripPage"
import AdminHomePage from "../Pages/AdminHomePage/AdminHomePage"
import Header from "../Header/Header"
        const Router = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/trips/application">
                    <Header/>
                    <ApplicationFormPage/>
                </Route>
                <Route exact path="/login">
                     <Header/>
                    <LoginPage/>
                </Route>
                <Route exact path="/admin/trips/list">
                    <Header/>
                    <AdminHomePage/>
                </Route>
                <Route exact path="/admin/trips/create">
                    <Header/>
                    <CreateTripPage/>
                </Route>
                <Route exact path="/admin/trips/:id">
                    <Header/>
                    <TripDetailsPage/>
                </Route>
                <Route>
                    <Header/>
                    <div>Página não encontrada!</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router