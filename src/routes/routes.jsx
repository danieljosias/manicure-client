import { Routes, Route, Navigate } from 'react-router-dom'
import { Signin } from '../pages/Signin'
import { Clients } from '../pages/Clients'
import { Schedules } from '../pages/Schedules'
import { Finances } from '../pages/Finances'
import { useContext, useState } from 'react'
import { ApiContext } from '../providers/api'

export const Router = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return(
        <Routes>
            <Route exact path='/signin' element={<Signin/>}/>
            <Route path="/clients" element={<Clients />} />
            
           {/*  {isAuthenticated ? (
                <>
                    <Route path="/schedules" element={<Schedules />} />
                    <Route path="/finances" element={<Finances />} />
                </>
            ) : (
                <Route path="*" element={<Navigate to="/signin" />} />
            )} */}
        </Routes>    
    )
}