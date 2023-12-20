import { createContext, useState } from 'react'
import { api } from '../services/services'
export const ApiContext = createContext([])

export const ApiProvider = ({children}) => {
    let token = localStorage?.getItem('token')

    async function createAdmin(data){
        try {
            const res = await api.post('/admins/', data)
            return res
        } catch (error) {
           return error
        }
    }

    async function login(data){
        try {
            const res = await api.post('/login/', data)
            return res
        } catch (error) {
            return error
        }
    }

    async function createClients(data){
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

    async function updateCLients(user_id, data){
        try {
            const res = await api.patch(`/clients/${user_id}/`, data)
            return res
        } catch (error) {
            return error
        }
    }

    async function deleteComments(user_id){
        try {
            const res = await api.delete(`/comments/${user_id}/`)
            return res
        } catch (error) {
            return error
        }
    }

    return(
        <ApiContext.Provider 
            value={{createAdmin,
            login,
            createClients,
            listClients,
            updateCLients,
            deleteComments, 
        }}
        >
            {children}
        </ApiContext.Provider>
    )
}