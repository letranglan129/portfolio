import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

export default function IntroduceFigure() {
    return (
        <>
            <div className="main-bg select-none">
                <img src="./images/bg-main.jpg" alt="" />
            </div>
            <ParallaxProvider>
                <div className="main-view">
                    <div className="main-preview-1">
                        <img src="./images/main-pic-6.png" alt="" />
                    </div>
                    <Parallax
                        translateY={['140px', '-140px']}
                        easing="easeInQuad"
                        className="absolute main-preview-2 preview"
                    >
                        <img src="./images/main-pic-1.png" alt="" />
                    </Parallax>
                    <Parallax
                        translateY={['50px', '-50px']}
                        easing="easeInQuad"
                        className="absolute main-preview-3 preview"
                    >
                        <img src="./images/main-pic-2.png" alt="" />
                    </Parallax>

                    <Parallax className="absolute main-preview-4 preview">
                        <img src="./images/main-pic-3.png" alt="" />
                    </Parallax>

                    <Parallax className="absolute main-preview-5 preview">
                        <img src="./images/main-pic-4.png" alt="" />
                    </Parallax>

                    <Parallax
                        translateY={['140px', '-200px']}
                        easing="easeInQuad"
                        className="absolute main-preview-6 preview"
                    >
                        <img src="./images/main-pic-5.png" alt="" />
                    </Parallax>

                    <Parallax
                        translateY={['-140px', '-20px']}
                        easing="easeInQuad"
                        className="absolute main-preview-7 preview"
                    >
                        <img src="./images/main-pic-7.png" alt="" />
                    </Parallax>
                </div>

                <div className="main-figures">
                    <Parallax
                        translateY={['-100px', '200px']}
                        easing="easeInQuad"
                        className="absolute main-figure-1"
                    >
                        <img src="./images/figure-1.png" alt="" />
                    </Parallax>

                    <Parallax
                        data-aos="fade-up"
                        translateY={['50px', '0px']}
                        easing="easeInQuad"
                        className="absolute main-figure-2"
                    >
                        <img src="./images/figure-2.png" alt="" />
                    </Parallax>

                    <Parallax
                        data-aos="fade-up"
                        translateY={['50px', '0px']}
                        easing="easeInQuad"
                        className="absolute main-figure-3"
                    >
                        <img src="./images/figure-3.png" alt="" />
                    </Parallax>
                </div>
            </ParallaxProvider>
        </>
    )
}
