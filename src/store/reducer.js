import { TOGGLE_NAVBAR, GET_CV_LINK } from './constants'

const initialState = {
    isOpenNavbar: false,
    socialLink: {
        facebook: {
            link: 'https://www.facebook.com/ltlan',
            name: 'Facebook',
            icon: <i className="fab fa-facebook-f"></i>,
        },
        linkedIn: {
            link: 'https://www.linkedin.com/in/ltlan',
            name: 'LinkedIn',
            icon: <i className="fab fa-linkedin-in"></i>,
        },
        github: {
            link: 'https://github.com/letranglan129',
            name: 'Github',
            icon: <i className="fab fa-github"></i>,
        },
        cv: {
            link: '#',
            name: 'Download CV',
            icon: null,
        },
    },
}

function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case TOGGLE_NAVBAR: {
            document.body.classList.toggle('no-scroll', !state.isOpenNavbar)
            return { ...state, isOpenNavbar: !state.isOpenNavbar }
        }
        case GET_CV_LINK: {
            return {
                ...state,
                socialLink: {
                    ...state.socialLink,
                    cv: {
                        ...state.socialLink.cv,
                        link: payload,
                    },
                },
            }
            return
        }

        default:
            return state
    }
}

export { initialState }
export default reducer
