import SocialLink from '../SocialLink/SocialLink'
import { useStore, actions } from './../../store'
import { useEffect } from 'react'
import { SOCIAL_LINK } from '../../constant'

function Header({ children, ...props }) {
    const [state, dispatch] = useStore()

    return (
        <div className="container mx-auto py-4 md:py-6 lg:py-12" id="header">
            <div className="flex items-center">
                <div className={`mr-20 ${state.isOpenNavbar && 'hidden'}`}>
                    <img src="./images/logo.svg" alt="" />
                </div>
                <div
                    className={`mr-20 ${!state.isOpenNavbar && 'hidden'} z-50`}
                >
                    <img
                        src="./images/logo-white.svg"
                        alt=""
                        className="hidden md:block"
                    />
                    <img
                        src="./images/logo.svg"
                        alt=""
                        className="block md:hidden"
                    />
                </div>
                <div className="mr-auto hidden md:block">
                    {Object.keys(SOCIAL_LINK).map((key, index) => (
                        <div className="inline-block mr-8" key={index}>
                            <SocialLink link={SOCIAL_LINK[key].link}>
                                <span className="mr-2">
                                    {SOCIAL_LINK[key].icon}
                                </span>
                                {SOCIAL_LINK[key].name}
                            </SocialLink>
                        </div>
                    ))}
                </div>
                <div
                    onClick={() => dispatch(actions.toggleNavbar())}
                    className={`toggle ml-auto z-50 ${
                        state.isOpenNavbar && 'active'
                    }`}
                ></div>
            </div>
        </div>
    )
}

export default Header
