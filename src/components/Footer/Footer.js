import { animateScroll as scroll } from 'react-scroll'
import Link from 'react-scroll/modules/components/Link'
import { SCROLL_ROUTER } from '../../constant'
import FooterFigure from './../Background/FooterFigure'

export default function Footer() {
    return (
        <footer className="relative" id="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-body">
                        <div className="footer-logo">
                            <img src="./images/logo-empty.svg" alt="" />
                        </div>
                        <div className="footer-text">
                            <h1>
                                You only have one chance to make a first
                                impression.
                            </h1>
                            <h3>Let's make it an amazing one.</h3>
                        </div>

                        <div className="footer-links">
                            <ul>
                                {Object.keys(SCROLL_ROUTER).map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            activeClass="active"
                                            to={SCROLL_ROUTER[item]}
                                            spy={true}
                                            smooth={true}
                                            duration={1500}
                                        >
                                            <div className="footer-link">
                                                {item}
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>© 2022, Le Trang Lan.</span>

                    <span
                        className="ml-auto cursor-pointer"
                        onClick={() =>
                            scroll.scrollToTop({
                                duration: 1500,
                                smooth: true,
                            })
                        }
                    >
                        Back to Top
                    </span>
                </div>
            </div>
            <FooterFigure />
        </footer>
    )
}
