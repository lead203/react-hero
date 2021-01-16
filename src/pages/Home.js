import React, {useState, useContext, useEffect} from 'react'

import {Card} from '../components/Card'
import {Filter} from '../components/Filter'
import {Modal} from '../components/Modal'
import {DateContext} from '../context/date/dateContext'
import {FirebaseContext} from '../context/firebase/firebaseContext'
import {Loader} from '../components/Loader'

export const Home = () => {
    const {loading, fetchCards, cards, addCards} = useContext(FirebaseContext)
    const {showModal} = useContext(DateContext)

    useEffect( () => {
        fetchCards()
    }, [] )

    const [filter, setFilter] = useState({
        name: '',
        film: '',
        universe: '',
        character: ''
    })

    return (
        <>
            <div className="b-flex">
                <button onClick={() => showModal('fade modal-s')} type="button" className="btn btn-primary">
                    Добавить
                </button>
            </div>

            <Modal addCards={addCards} cards={cards} />
            
            <hr />

            <Filter filter={filter} setFilter={setFilter} />

            {loading 
                ? <Loader /> 
                : 
                    <div className="row row-cols-1 row-cols-md-4 g-4 b-flex">
                        {cards && cards
                            .filter(
                                card => card.cardNote.name === (filter.name ? filter.name : card.cardNote.name) &&
                                card.cardNote.film === (filter.film ? filter.film : card.cardNote.film) &&
                                card.cardNote.universe === (filter.universe ? filter.universe : card.cardNote.universe) &&
                                card.cardNote.character === (filter.character ? filter.character : card.cardNote.character)
                            )
                            .map( (card, index) => <Card cardObj={card} index={index} key={index} /> )
                        }
                        {!cards.length && <p className="text-center">Нет данных</p>}
                    </div>
            }
            
            
        </>
    )
}