import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

export default function FooterFigure() {
    return (
        <div className="footer-figures">
            <ParallaxProvider>
                <Parallax
                    translateY={['-86px', '43px']}
                    className="absolute footer-figure-1"
                    easing="easeInQuad"
                >
                    <img src="./images/footer-cube-1.png" alt="" />
                </Parallax>
                <Parallax
                    translateY={['63px', '13px']}
                    className="absolute footer-figure-2"
                    easing="easeInQuad"
                >
                    <img src="./images/footer-cube-1.png" alt="" />
                </Parallax>
            </ParallaxProvider>
        </div>
    )
}
