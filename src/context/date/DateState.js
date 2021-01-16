import React, {useState} from 'react'
import {DateContext} from './dateContext'

export const DateState = ({children}) => {
    const [cards, setCards] = useState([
        {
            name: 'Name1',
            film: 'Film1',
            universe: 'Marvel',
            character: 'kind',
            description: 'description1'
        },
        {
            name: 'Name2',
            film: 'Film2',
            universe: 'Marvel',
            character: 'kind',
            description: 'description2'
        }
    ]);

    const [fade, setFade] = useState()

    function showModal(value) {
        setFade(value)
    }

    return(
        <DateContext.Provider value={{cards, setCards, showModal, fade, setFade}}>
            {children}
        </DateContext.Provider>
    )
}