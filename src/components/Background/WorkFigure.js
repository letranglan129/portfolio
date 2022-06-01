import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

export default function WorkFigure() {
    return (
        <>
            <div className="work-circles"></div>
            <ParallaxProvider>
                <div className="work-figures pointer-events-none z-10">
                    <Parallax
                        translateY={['130px', '-130px']}
                        easing="easeInQuad"
                        className="work-figure work-figure-1"
                    >
                        <img src="./images/work-cube-1.png" alt="" />
                    </Parallax>
                    <Parallax
                        translateY={['150px', '-150px']}
                        translateX={['150px', '-150px']}
                        easing="easeInQuad"
                        className="work-figure work-figure-2"
                    >
                        <img src="./images/work-cube-2.png" alt="" />
                    </Parallax>
                    <Parallax
                        translateX={['-80px', '80px']}
                        translateY={['80px', '-80px']}
                        easing="easeInQuad"
                        className="work-figure work-figure-3"
                    >
                        <img src="./images/work-cube-3.png" alt="" />
                    </Parallax>
                    <Parallax className="work-figure work-figure-4">
                        <img src="./images/work-cube-4.png" alt="" />
                    </Parallax>
                    <Parallax
                        translateX={['40px', '-40px']}
                        easing="easeInQuad"
                        className="work-figure work-figure-5"
                    >
                        <img src="./images/work-cube-5.png" alt="" />
                    </Parallax>
                    <Parallax
                        translateX={['-77px', '77px']}
                        easing="easeInQuad"
                        className="work-figure work-figure-6"
                    >
                        <img src="./images/work-cube-6.png" alt="" />
                    </Parallax>
                    <Parallax
                        translateY={['-61px', '61px']}
                        easing="easeInQuad"
                        className="work-figure work-figure-7"
                    >
                        <img src="./images/work-cube-7.png" alt="" />
                    </Parallax>
                </div>
                <Parallax
                    className="work-preview !z-0"
                    translateY={['-50px', '50px']}
                    easing="easeInQuad"
                >
                    <img src="./images/work-cube.png" alt="" />
                </Parallax>
            </ParallaxProvider>
        </>
    )
}
