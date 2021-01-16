import React, {useReducer} from 'react'
import { Redirect } from 'react-router'
import axios from 'axios'
import {FirebaseContext} from './firebaseContext'
import {FirebaseReducer} from './firebaseReducer'
import {ADD_CARD, FETCH_CARD, REMOVE_CARD, SHOW_LOADER, EDIT_CARD} from '../types'

const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({children}) => {
    const initialState = {
        cards: [],
        loading: false
    }

    const [state, dispath] = useReducer(FirebaseReducer, initialState)

    const showLoader = () => dispath({type: SHOW_LOADER})

    const fetchCards = async () => {
        showLoader()
        const res = await axios.get(`${url}/cards.json`)

        try {
            const payload = Object.keys(res.data).map(key => {

                return {
                    ...res.data[key],
                    id: key
                }

            })

            dispath({type: FETCH_CARD, payload})

        } catch(e) {
            dispath({loading: false})
        }
    }

    const addCards = async cardNote => {
        const card = {
            cardNote, data: new Date().toJSON()
        }

        try {
            const res = await axios.post(`${url}/cards.json`, card)
            const payload = {
                ...card,
                id: res.data.name
            }

            dispath({type: ADD_CARD, payload})

        } catch(e) {
            console.log(e)
        }
    }

    const removeCard = async id => {
        await axios.delete(`${url}/cards/${id}.json`).then(()=>{
            return <Redirect to="/"/>
        })

        dispath({
            type: REMOVE_CARD,
            payload: id
        })
    }

    const editCard = async (id, cardNote) => {
        const card = {
            cardNote, data: new Date().toJSON()
        }

        await axios.put(`${url}/cards/${id}.json`, card)

        dispath({
            type: EDIT_CARD,
            payload: id
        })
    }



    return (
        <FirebaseContext.Provider value={{
            showLoader, fetchCards, addCards, removeCard, editCard,
            loading: state.loading,
            cards: state.cards
        }}>
            {children}
        </FirebaseContext.Provider>
    )
    
}