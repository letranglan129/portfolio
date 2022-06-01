import AOS from 'aos'
import 'aos/dist/aos.css'
import { collection, getDocs, query } from 'firebase/firestore'
import { useEffect } from 'react'
import { Element } from 'react-scroll/modules'
import IntroduceFigure from './components/Background/IntroduceFigure'
import Contact from './components/Contact/Contact'
import Detail from './components/Detail/Detail'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Introduce from './components/Introduce/Introduce'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import Work from './components/Work/Work'
import { db } from './firebase/config'
import { actions, useStore } from './store'

function App() {

    const [state, dispatch] = useStore()

    useEffect(() => {

        const getCVLink = async () => {
            const res = await fetch(
                'https://api-constant.herokuapp.com/portfolio?segment=CV'
            )
            const data = await res.json()
            dispatch(actions.getCVLink(data.cv))
        }

        getCVLink()
    }, [])

    useEffect(() => {
        const fetchTechList = async () => {
            const q = query(collection(db, 'tech'))

            const techsSnapshot = await getDocs(q)
            const techs = []
            techsSnapshot.forEach(doc => {
                techs.push(doc.data())
            })
            dispatch(actions.getTechList(techs[0].techList))
        }

        fetchTechList()
    }, [])


    useEffect(() => {
        AOS.init({
            duration: 1000,
        })

        // Change title
        document.title = 'Portfolio - Le Trang Lan'
    }, [])

    return (
        <div className="App">
            <div className="pb-0 md:pb-[60px] lg:pb-[150px]">
                <Header />
                <Navbar />
                <Element name="goToAboutElement">
                    <Introduce />
                    <IntroduceFigure />
                </Element>
            </div>
            <Element name="goToDetailsElement">
                <Detail />
            </Element>
            <Work />
            <div className="wrapper-light ">
                <Element name="goToProductsElement">
                    <Products />
                </Element>
                <div className="wrapper-dark">
                    <Element name="goToContactElement">
                        <Contact />
                    </Element>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default App
