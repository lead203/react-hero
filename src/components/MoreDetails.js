import React, {useContext} from 'react'
import {DateContext} from '../context/date/dateContext'
import {FirebaseContext} from '../context/firebase/firebaseContext'
import {Modal} from './Modal'

import {Redirect} from 'react-router'

import img from '../assets/images/test-img.jpg'

export const MoreDetails = (props) => {
    const {showModal} = useContext(DateContext)
    const {removeCard, cards, addCards, editCard} = useContext(FirebaseContext)

    const id = props.match.params.id

    let newCard = false

    console.log(cards)

    cards.map(card => {
        if(card.id === id) {
            newCard = card.cardNote
        }
    })

    console.log(newCard)

    return (
        <>
            {newCard
                ? 
                <>
                    <Modal
                        idCard={id}
                        cards={newCard}
                        addCards={addCards}
                        editCard={editCard}
                    />
                    <div className="card text-center">
                        <div className="card-header">
                            Подробная информация
                        </div>
                        <div className="card-body card-w">
                            <div className="col mt-3 mb-3">
                                <div className="card h-100">
                                    <img src={img} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{newCard.name}</h5> 
                                        <p className="card-text">{newCard.universe}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="b-flex">
                            <button onClick={() => showModal('fade modal-s')} className="btn btn-primary mr-3">
                                Редактировать
                            </button>

                            <button onClick={() => removeCard(id)} className="btn btn-danger">
                                Удалить
                            </button>
                        </div>
                        
                        <div className="card-footer text-muted">
                            2 days ago
                        </div>
                    </div>
                </>
                : <Redirect to="/"/>}
        </>
    )
}