import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

export default function ProductFigure() {
    return (
        <ParallaxProvider>
            <div className="product-figures pointer-events-none">
                <Parallax
                    translateY={['-136px', '136px']}
                    easing="easeInQuad"
                    className="absolute product-figure-1"
                >
                    <img src="./images/figure-2.png" alt="" />
                </Parallax>
                <Parallax
                
                translateY={['-170px', '347px']}
                    easing="easeInQuad"
                    className="absolute product-figure-2"
                >
                    <img src="./images/figure-3.png" alt="" />
                </Parallax>
            </div>
        </ParallaxProvider>
    )
}
