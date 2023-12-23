import { createContext, useState } from 'react'
import { api } from '../services/services.js'
export const ApiContext = createContext([])

export const ApiProvider = ({children}) => {
    let token = localStorage?.getItem('token')
    const [clients, setClients]  = useState([])

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

    async function updateCLients(user_id, data){
        try {
            const res = await api.patch(`/clients/${user_id}/`, data)
            return res
        } catch (error) {
            return error
        }
    }

    async function deleteClients(user_id){
        try {
            const res = await api.delete(`/comments/${user_id}/`)
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

    async function updateSchedules(user_id, data){
        try {
            const res = await api.patch(`/schedules/${user_id}/`, data)
            return res
        } catch (error) {
            return error
        }
    }

    async function deleteSchedules(user_id){
        try {
            const res = await api.delete(`/schedules/${user_id}/`)
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

    async function updateFinances(user_id, data){
        try {
            const res = await api.patch(`/finances/${user_id}/`, data)
            return res
        } catch (error) {
            return error
        }
    }

    async function deleteFinances(user_id){
        try {
            const res = await api.delete(`/finances/${user_id}/`)
            return res
        } catch (error) {
            return error
        }
    }


    return(
        <ApiContext.Provider 
            value={{login,
            createsClients,
            updateCLients,
            deleteClients,
            createSchedules,
            updateSchedules,
            deleteSchedules, 
            createFinances,
            updateFinances,
            deleteFinances,
            clients,
            setClients, 
        }}
        >
            {children}
        </ApiContext.Provider>
    )
}