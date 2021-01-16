import React from 'react'
import {NavLink} from 'react-router-dom'

import img from '../assets/images/test-img.jpg'

export const Card = ({cardObj}) => {
    const card = cardObj.cardNote
    const id = cardObj.id

    return (
        <NavLink className="nav-link" to={`/details/${id}`}>
            <div className="col mt-3 mb-3">
                <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{card.name}</h5>
                    <p className="card-text">{card.universe}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </div>
                </div>
            </div>
        </NavLink>
    )
}