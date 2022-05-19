import { Element } from 'react-scroll/modules'
import { Grid, Navigation } from 'swiper'
import { SwiperSlide } from 'swiper/react'
import { CARD_CONTENT_LIST } from '../../constant'
import DetailFigure from '../Background/DetailFigure'
import Button from '../Button/Button'
import { CardList } from '../Card'
import Title from '../Title/Title'

export default function Detail() {
    return (
        <div
            className="pt-[60px] md:pt-[120px] lg:pt-[200px] pb-[128px] relative bg-white"
            id="details"
        >
            <div className="container mb-24 md:mb-32 lg:mb-36 xl:mb-48">
                <div className="mb-8">
                    <Title
                        title="What I Do"
                        className="name text-[#4c40f7]"
                        data-aos="fade-right"
                        data-aos-once="false"
                        data-aos-duration="1000"
                    >
                        <div>
                            <h3
                                data-aos="fade-up"
                                data-aos-once="false"
                                data-aos-duration="1000"
                                className="bottom-line md:mb-8 lg:mb-16 text-xl md:text-[32px] md:leading-[48px] lg:text-[42px] lg:leading-[56px] font-semibold"
                            >
                                I enjoy creating delightful,
                                <br />
                                human-centered digital experiences.
                            </h3>

                            <h1
                                data-aos="fade-up"
                                data-aos-once="false"
                                data-aos-duration="1000"
                                className="text-[72px] md:text-[80px] lg:text-[112px] font-semibold "
                            >
                                Think. Make.
                                <br /> Solve.
                            </h1>
                        </div>
                    </Title>
                </div>

                <Button
                    data-aos-easing="ease-out-cubic"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-once="false"
                >
                    <span className="mr-4">Contact Me</span>
                    <i className="far fa-long-arrow-right"></i>
                </Button>
            </div>
            <DetailFigure />
            <Element name="goToSkillsElement">
                <div className="container overflow-hidden">
                    <h1 className="text-[56px] text-center tracking-widest font-semibold ">
                        Skill
                    </h1>

                    <CardList
                        modules={[Grid, Navigation]}
                        spaceBetween={32}
                        navigation={{
                            nextEl: '.swiper-next',
                            prevEl: '.swiper-prev',
                        }}
                        grid={{
                            rows: 2,
                            fill: 'row',
                        }}
                        speed={700}
                        breakpoints={{
                            576: {
                                slidesPerView: 2,
                                spaceBetween: 18,
                                grid: {
                                    rows: 2,
                                    fill: 'row',
                                },
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 32,
                                grid: {
                                    rows: 2,
                                    fill: 'row',
                                },
                            },
                        }}
                    >
                        {CARD_CONTENT_LIST.map((CARD, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="mb-8"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-once="false"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="flex items-center justify-center mx-auto w-32 h-32 mb-4">
                                        <img src={CARD.src} alt="" />
                                    </div>
                                    <div className="flex flex-col justify-center items-center font-medium">
                                        {CARD.title}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </CardList>
                </div>
            </Element>
        </div>
    )
}
