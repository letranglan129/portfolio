import { TOGGLE_NAVBAR, GET_CV_LINK } from './constants'

export const toggleNavbar = payload => ({
    type: TOGGLE_NAVBAR,
    payload,
})

export const getCVLink = payload => ({
    type: GET_CV_LINK,
    payload,
})
