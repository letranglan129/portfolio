import { collection, getDocs, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Grid, Navigation, Pagination } from 'swiper'
import { SwiperSlide } from 'swiper/react'
import { db } from '../../firebase/config'
import ProductFigure from '../Background/ProductFigure'
import Tabs from '../Tabs/Tabs'
import Title from '../Title/Title'
import { CardList, CardProduct } from './../Card'

export default function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const q = query(collection(db, 'products'))

            const productsSnapshot = await getDocs(q)
            const products = []
            productsSnapshot.forEach(doc => {
                products.push(doc.data())
            })

            setProducts(products)
        }
        getProducts()
    }, [])

    console.log(products)

    return (
        <div
            className="relative pt-[64px] mb-[72px] md:mb-[90px] lg:pt-[96px] xl:pt-[128px] xl:mb-[130px] overflow-hidden z-10"
            id="products"
        >
            <div className="container">
                <div className="xl:mb-[200px] max-w-[400px] xl:max-w-[570px]">
                    <Title
                        title="Portfolio"
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
                                className=" mb-4 text-[42px] leading-[48px] md:mb-8 md:text-[56px] md:leading-[72px] lg:mb-12 lg:text-[72px] lg:leading-[84px] font-semibold"
                            >
                                Look at My Products.
                            </h1>
                        </div>
                    </Title>
                </div>
                <Tabs>
                    <div label="Website">
                        <div className="container overflow-hidden p-0">
                            <CardList
                                modules={[Grid, Navigation, Pagination]}
                                spaceBetween={32}
                                slidesPerView={3}
                                speed={700}
                                navigation={{
                                    nextEl: '.swiper-next',
                                    prevEl: '.swiper-prev',
                                }}
                                grid={{
                                    rows: 2,
                                    fill: 'row',
                                }}
                                pagination={{
                                    el: '.swiper-pagination',
                                    clickable: true,
                                }}
                                breakpoints={{
                                    1279: {
                                        slidesPerView: 3,
                                        grid: {
                                            rows: 2,
                                            fill: 'row',
                                        },
                                    },
                                    640: {
                                        slidesPerView: 2,
                                        grid: {
                                            rows: 2,
                                            fill: 'row',
                                        },
                                    },
                                    0: {
                                        slidesPerView: 1,
                                        grid: {
                                            rows: 1,
                                            fill: 'row',
                                        },
                                    },
                                }}
                            >
                                {products.map((product, index) => (
                                    <SwiperSlide key={index}>
                                        <CardProduct
                                            name={product.name}
                                            srcImage={product.image}
                                            demoURL={product.demoURL}
                                            sourceURL={product.sourceURL}
                                            tech={product.tech}
                                        />
                                    </SwiperSlide>
                                ))}
                            </CardList>
                        </div>
                    </div>
                    <div label="Desktop App">
                        <div className='text-center text-3xl mt-4'>No products</div>
                    </div>
                    <div label="Mobile App">
                        <div className='text-center text-3xl mt-4'>No products</div>
                    </div>
                </Tabs>
            </div>

            <ProductFigure />
        </div>
    )
}
