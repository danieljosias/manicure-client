import { Routes, Route, Navigate } from 'react-router-dom'
import { Signin } from '../pages/Signin'
import { Clients } from '../pages/Clients'
import { Schedules } from '../pages/Schedules'
import { Finances } from '../pages/Finances'
import { useContext } from 'react'
import { ApiContext } from '../providers/api'

export const Router = () => {
    const { isAuthenticated } = useContext(ApiContext)

    return(
        <Routes>
            <Route exact path='/signin' element={<Signin/>}/>
            
            {isAuthenticated ? (
                <>
                    <Route path="/clients" element={<Clients />} />
                    <Route path="/schedules" element={<Schedules />} />
                    <Route path="/finances" element={<Finances />} />
                </>
            ) : (
                <Route path="*" element={<Navigate to="/signin" />} />
            )}
        </Routes>    
    )
}