import {SHOW_LOADER, ADD_CARD, FETCH_CARD, REMOVE_CARD, EDIT_CARD} from '../types'

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [ADD_CARD]: (state, {payload}) => ({
        ...state,
        cards: [...state.cards, payload]
    }),
    [FETCH_CARD]: (state, {payload}) => ({
        ...state, cards: payload, loading: false
    }),
    [REMOVE_CARD]: (state, {payload}) => ({
        ...state,
        cards: state.cards.filter(card => card.id !== payload)
    }),
    [EDIT_CARD]: (state, {payload}) => ({
        ...state,
        cards: state.cards.filter(card => card.id !== payload)
    }),
    DEFAULT: state => ({...state, loading: false}),
}

export const FirebaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}