import Link from 'react-scroll/modules/components/Link'
import { SCROLL_ROUTER } from '../../constant'
import { actions } from '../../store'
import ContactList from '../Contact/ContactList'
import HeaderLink from '../Header/HeaderLink'
import SocialLink from '../SocialLink/SocialLink'
import { useStore } from './../../store/hooks'

function Navbar() {
    const [state, dispatch] = useStore()

    return (
        <div className={`navbar ${state.isOpenNavbar && 'active'}`}>
            <div className="absolute top-0 left-0 md:w-[300px] 960:w-[400px] bottom-0 bg-[#1b1b87] hidden md:block">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 max-h-full h-full">
                    <img
                        className="h-full"
                        src="/images/bg-header.png"
                        alt=""
                    />
                </div>
            </div>

            <div
                className={`md:!mt-0 md:ml-[300px] 960:ml-[400px] mt-[80px] container md:px-8 pb-12 sm:pb-0`}
            >
                <div className="flex flex-col-reverse 960:flex-row mb-4 md:mb-0">
                    <div className="960:w-3/5 w-full">
                        <ContactList className="text-sm md:text-lg" />
                    </div>
                    <div className="960:w-2/5 w-full">
                        <ul>
                            {Object.keys(SCROLL_ROUTER).map((item, index) => (
                                <Link
                                    activeClass="active"
                                    to={SCROLL_ROUTER[item]}
                                    spy={true}
                                    smooth={true}
                                    duration={1500}
                                    onClick={() =>
                                        dispatch(actions.toggleNavbar())
                                    }
                                    key={index}
                                >
                                    <li
                                        className="mb-4 header-link"
                                        style={{ '--i': 0 }}
                                        data-aos="new-fade-up"
                                    >
                                        <HeaderLink link="#">
                                            {item}
                                        </HeaderLink>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mr-auto w-full flex flex-wrap">
                    {Object.keys(state.socialLink).map(key => (
                        <div className="mb-2 mr-8" key={key}>
                            <SocialLink link={state.socialLink[key].link}>
                                {state.socialLink[key].icon && <span className='mr-2'>
                                    {state.socialLink[key].icon}
                                </span>}
                                {state.socialLink[key].name}
                            </SocialLink>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar
