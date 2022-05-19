import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

export default function ContactFigure() {
    return (
        <div className="contact-figures">
            <ParallaxProvider>
                    <Parallax
                        easing="easeInQuad"
                        className="contact-figure-1"
                    >
                        <img src="./images/figures-1.png" alt="" />
                    </Parallax>
                    <Parallax
                        translateY={['146px', '-146px']}
                        easing="easeInQuad"
                        className="absolute contact-figure-2"
                    >
                        <img src="./images/figures-2.png" alt="" />
                    </Parallax>
                    <Parallax
                        translateY={['33px', '-33px']}
                        easing="easeInQuad"
                        className="absolute contact-figure-3"
                    >
                        <img src="./images/figures-3.png" alt="" />
                    </Parallax>
                    <Parallax
                        // translateY={['50px', '-50px']}
                        easing="easeInQuad"
                        className="absolute contact-figure-4"
                    >
                        <img src="./images/figures-4.png" alt="" />
                    </Parallax>
                    <Parallax
                        translateY={['-50px', '50px']}
                        easing="easeInQuad"
                        className="absolute contact-figure-5"
                    >
                        <img src="./images/figures-5.png" alt="" />
                    </Parallax>
                    <Parallax
                        translateY={['56px', '-56px']}
                        easing="easeInQuad"
                        className="absolute contact-figure-6"
                    >
                        <img src="./images/figures-6.png" alt="" />
                    </Parallax>
            </ParallaxProvider>
        </div>
    )
}
