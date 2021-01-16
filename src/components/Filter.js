import React from 'react'

export const Filter = ({filter, setFilter}) => {

    return (
        <form>
            <div className="row g-3">
                <div className="col-sm mb-3">
                    <input onChange={e => setFilter({...filter, name: e.target.value})} value={filter.name} className="form-control" placeholder="Имя персонажа" />
                </div>
                <div className="col-sm mb-3">
                    <input onChange={e => setFilter({...filter, film: e.target.value})} value={filter.film} className="form-control" placeholder="Фильм" />
                </div>
                <div className="col-sm mb-3">
                    <select
                        onChange={e => setFilter({...filter, universe: e.target.value})}
                        className="form-select form-control"
                        value={filter.universe} 
                    >
                        <option value="">Вселенная</option>
                        <option value="Marvel">Marvel</option>
                        <option value="DC">DC</option>
                    </select>
                </div>
                <div className="col-sm mb-3">
                    <select
                        onChange={e => setFilter({...filter, character: e.target.value})}
                        className="form-select form-control"
                        value={filter.character}
                    >
                        <option value="">Характер</option>
                        <option value="evil">Злой</option>
                        <option value="kind">Добрый</option>
                    </select>
                </div>
                <div className="b-icon mb-3">
                    <button onClick={() => setFilter({name: '', film: '', universe: '', character: ''})} type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>

            
            {/* <button>sss</button> */}
        </form>
    )
}