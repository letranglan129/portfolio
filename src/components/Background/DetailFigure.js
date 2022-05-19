import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

export default function DetailFigure() {
    return (
        <div>
            <ParallaxProvider>
                <div className="detail-figures">
                    <Parallax
                        translateY={['-40px', '200px']}
                        easing="easeInQuad"
                        className="absolute detail-figure-1"
                    >
                        <img src="./images/figure-1.png" alt="" />
                    </Parallax>
                    <Parallax
                        translateY={['140px', '-140px']}
                        easing="easeInQuad"
                        className="absolute detail-figure-2"
                    >
                        <img src="./images/figure-2.png" alt="" />
                    </Parallax>
                    <Parallax
                        translateY={['50px', '-50px']}
                        easing="easeInQuad"
                        className="absolute detail-figure-3"
                    >
                        <img src="./images/figure-3.png" alt="" />
                    </Parallax>
                </div>
            </ParallaxProvider>
        </div>
    )
}
