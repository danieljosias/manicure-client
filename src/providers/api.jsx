import { createContext, useState } from 'react'
import { api } from '../services/services.js'
export const ApiContext = createContext([])

export const ApiProvider = ({children}) => {
    const [clients, setClients]  = useState([])
    const [schedules, setSchedules]  = useState([])
    const [finances, setFinances]  = useState([])
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    async function login(data){
        try {
            const res = await api.post('/login/', data)
            return res
        } catch (error) {
            return error
        }
    }

    async function createsClients(data){
        try {
            const res = await api.post('/clients/', data)
            return res
        } catch (error) {
            return error
        }
    }

    async function listClients(){
        try {
            const res = await api.get('/clients/')
            return res
        } catch (error) {
            return error
        }
    }

    async function updateClients(data, client_id){
        try {
            const res = await api.patch(`/clients/${client_id}/`, data)
            return res
        } catch (error) {
            return error
        }
    }

    async function deleteClients(client_id){
        try {
            const res = await api.delete(`/clients/${client_id}/`)
            return res
        } catch (error) {
            return error
        }
    }

    async function listSchedules(){
        try {
            const res = await api.get('/schedules/')
            return res
        } catch (error) {
            return error
        }
    }

    async function createSchedules(data){
        try {
            const res = await api.post('/schedules/', data)
            return res
        } catch (error) {
            return error
        }
    }

    async function updateSchedules(data,client_id){
        try {
            const res = await api.patch(`/schedules/${client_id}/`, data)
            return res
        } catch (error) {
            return error
        }
    }

    async function deleteSchedules(client_id){
        try {
            const res = await api.delete(`/schedules/${client_id}/`)
            return res
        } catch (error) {
            return error
        }
    }

    async function listFinances(){
        try {
            const res = await api.get('/finances/')
            return res
        } catch (error) {
            return error
        }
    }


    async function createFinances(data){
        try {
            const res = await api.post('/finances/', data)
            return res
        } catch (error) {
            return error
        }
    }

    async function updateFinances(data, finance_id){
        try {
            const res = await api.patch(`/finances/${finance_id}/`, data)
            return res
        } catch (error) {
            return error
        }
    }

    async function deleteFinances(finance_id){
        try {
            const res = await api.delete(`/finances/${finance_id}/`)
            return res
        } catch (error) {
            return error
        }
    }


    return(
        <ApiContext.Provider 
            value={{login,
            listClients,
            createsClients,
            updateClients,
            deleteClients,
            listSchedules,
            createSchedules,
            updateSchedules,
            deleteSchedules,
            listFinances, 
            createFinances,
            updateFinances,
            deleteFinances,
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