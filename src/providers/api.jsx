import { createContext, useState } from 'react'
import { api } from '../services/services.js'
export const ApiContext = createContext([])

export const ApiProvider = ({children}) => {
    const [clients, setClients]  = useState([])
    const [schedules, setSchedules]  = useState([])
    const [finances, setFinances]  = useState([])
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return(
        <ApiContext.Provider 
            value={{
            clients,
            setClients, 
            schedules,
            setSchedules,
            finances,
            setFinances,
            isAuthenticated,
            setIsAuthenticated,
        }}
        >
            {children}
        </ApiContext.Provider>
    )
}