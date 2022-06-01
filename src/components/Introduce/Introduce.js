import { Link } from 'react-scroll/modules'
import ScrollButton from '../Button/ScrollButton'
import Title from '../Title/Title'

export default function Introduce() {
    return (
        <div className="container">
            <div className="max-w-[240px] md:max-w-sm lg:max-w-[530px] lg:mb-48 mb-16">
                <Title
                    title="Le Trang Lan"
                    className="name text-[#4c40f7]"
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-duration="2000"
                >
                    <div>
                        <h1
                            data-aos="fade-up"
                            data-aos-once="true"
                            data-aos-duration="2000"
                            className="text-[32px] leading-[48px] md:text-[56px] md:leading-[72px] lg:text-[72px] lg:leading-[84px] font-semibold "
                        >
                            Hello, my name's Lân. I'm a Web Developer.
                        </h1>
                    </div>
                </Title>
            </div>
            <Link
                activeClass="active"
                to="goToDetailsElement"
                spy={true}
                smooth={true}
                duration={1500}
            >
                <div className="flex items-center cursor-pointer">
                    <ScrollButton>
                        <i className="fas fa-angle-double-down"></i>
                    </ScrollButton>
                    <div className="font-medium hidden md:block">
                        Scroll down
                    </div>
                </div>
            </Link>
        </div>
    )
}
