import Link from 'react-scroll/modules/components/Link'
import WorkFigure from '../Background/WorkFigure'
import ScrollButton from '../Button/ScrollButton'
import Title from '../Title/Title'

export default function Work() {
    return (
        <div
            className="relative bg-[#1b1b87] pt-[56px] pb-[475px] md:py-[143px] xl:pt-[246px] xl:pb-[80px] overflow-hidden"
            id="works"
        >
            <WorkFigure />
            <div className="container">
                <div className="xl:mb-[200px] max-w-[400px] xl:max-w-[570px]">
                    <Title
                        title="Who I Work With"
                        className="name text-[#ffbdbd]"
                        data-aos="fade-right"
                        data-aos-duration="1200"
                    >
                        <div>
                            <h1
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                className="text-white mb-4 text-[42px] leading-[48px] md:mb-8 md:text-[56px] md:leading-[72px] lg:mb-12 lg:text-[72px] lg:leading-[84px] font-semibold"
                            >
                                I work with a lot of different companies.
                            </h1>
                            <p
                                className="text-white md:text-lg mr-[48px]"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                I research and create breakthrough - delightful
                                ideas, leading visual designers.
                            </p>
                        </div>
                    </Title>
                </div>

                <Link
                    activeClass="active"
                    to="goToProductsElement"
                    spy={true}
                    smooth={true}
                    duration={1500}
                >
                    <div className="items-center hidden xl:flex">
                        <ScrollButton>
                            <i className="fas fa-angle-double-down"></i>
                        </ScrollButton>
                        <div className="text-white font-medium">
                            Scroll down
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
