import { Swiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function CardList({ children, ...props }) {
    return (
        <Swiper {...props}>
            {children}

            {props.pagination && <div className="swiper-pagination"></div>}

            {props.navigation && (
                <div className="flex items-center justify-center mt-16 h-14">
                    <div className="swiper-prev mr-8">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="8"
                                height="14"
                                fill="none"
                                viewBox="0 0 8 14"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M.293 13.707a1 1 0 0 1 0-1.414L5.586 7 .293 1.707A1 1 0 1 1 1.707.293l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0z"
                                    fill="#9f9fa9"
                                ></path>
                            </svg>
                        </span>
                    </div>
                    <div className="swiper-next">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="8"
                                height="14"
                                fill="none"
                                viewBox="0 0 8 14"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M.293 13.707a1 1 0 0 1 0-1.414L5.586 7 .293 1.707A1 1 0 1 1 1.707.293l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0z"
                                    fill="#9f9fa9"
                                ></path>
                            </svg>
                        </span>
                    </div>
                </div>
            )}
        </Swiper>
    )
}
