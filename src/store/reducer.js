import { TOGGLE_NAVBAR } from './constants'

const initialState = {
    isOpenNavbar: false,
}

function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case TOGGLE_NAVBAR: {
            document.body.classList.toggle('no-scroll', !state.isOpenNavbar)
            return { ...state, isOpenNavbar: !state.isOpenNavbar }
        }


        default:
            return state
    }
}

export { initialState }
export default reducer
