import React, {useState, useContext} from 'react'
import {DateContext} from '../context/date/dateContext'

export const Modal = ({idCard, addCards, cards, editCard}) => {

    const {fade, setFade, showModal} = useContext(DateContext)

    const [input, setInput] = useState({
        name: idCard ? cards.name : '',
        film: idCard ? cards.film : '',
        universe: idCard ? cards.universe : 'Marvel',
        character: idCard ? cards.character : 'kind',
        description: idCard ? cards.description : '',
    })

    function handleInputChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name
        
        setInput({...input, [name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault();

        if(!idCard) {
            addCards(input)
            setInput({
                name: '',
                film: '',
                universe: 'Marvel',
                character: 'kind',
                description: '',
            })
            setFade('')
        } else {
            editCard(idCard, input)
            setFade('')
        }
    }

    return (

        <>  
            <div className={`modal show ${fade}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{idCard ? 'Редактироват запись' : 'Добавить запись'}</h5>
                            <button onClick={() => showModal('')} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={e => handleSubmit(e)}>
                                <div className="form-group">
                                    <label htmlFor="input0">Имя</label>
                                    <input
                                        onChange={e => handleInputChange(e)}
                                        className="form-control"
                                        id="input0"
                                        name="name"
                                        value={input.name}
                                        required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="input1">Фильмы</label>
                                    <input
                                        onChange={e => handleInputChange(e)}
                                        className="form-control"
                                        id="input1"
                                        name="film"
                                        value={input.film}
                                        required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="input2">Вселенная</label>
                                    <select
                                        onChange={e => handleInputChange(e)}
                                        className="form-control"
                                        id="input2"
                                        name="universe"
                                        defaultValue={input.universe}
                                    >
                                        <option value="Marvel">Marvel</option>
                                        <option value="DC">DC</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="input3">Характер</label>
                                    <select
                                        onChange={e => handleInputChange(e)}
                                        className="form-control"
                                        id="input3"
                                        name="character"
                                        defaultValue={input.character}
                                    >
                                        <option value="kind">Добрый</option>
                                        <option value="evil">Злой</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="input4">Описание</label>
                                    <textarea
                                        onChange={e => handleInputChange(e)}
                                        className="form-control"
                                        id="input4"
                                        name="description"
                                        value={input.description}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Отправить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}