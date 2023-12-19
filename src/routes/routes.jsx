import { Routes, Route } from 'react-router-dom'
import { Signin } from '../pages/Signin'
import { Clients } from '../pages/Clients'
import { Schedules } from '../pages/Schedules'
import { Finances } from '../pages/Finances'

export const Router = () => {
    return(
        <Routes>
            <Route exact path='/signin' element={<Signin/>}/>
            <Route exact path='/clients' element={<Clients/>}/>
            <Route exact path='/schedules' element={<Schedules/>}/>
            <Route exact path='/finances' element={<Finances/>}/>
        </Routes>
    )
}