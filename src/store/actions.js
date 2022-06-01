import { TOGGLE_NAVBAR, GET_CV_LINK, GET_TECH_LIST } from './constants'

export const toggleNavbar = payload => ({
    type: TOGGLE_NAVBAR,
    payload,
})

export const getCVLink = payload => ({
    type: GET_CV_LINK,
    payload,
})

export const getTechList = payload => ({
    type: GET_TECH_LIST,
    payload,
})

