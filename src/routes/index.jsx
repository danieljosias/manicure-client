import { Switch, Route } from "react-router-dom";
import { Signin } from '../pages/Signin'
import { Clients } from '../pages/Clients'

export const Router = () => {
    return(
        <Switch>
            <Route exact path='/signin'>
                <Signin/>
            </Route>
            <Route exact path='/clients'>
                <Clients/>
            </Route>
        </Switch>
    )
}