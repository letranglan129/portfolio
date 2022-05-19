import ContactFigure from '../Background/ContactFigure'
import Title from '../Title/Title'
import ContactForm from './ContactForm'
import ContactList from './ContactList'
import ContactSocial from './ContactSocial'

export default function Contact() {
    return (
        <div className="container" id="contacts">
            <div className="contact-card">
                <div className="mb-8  max-w-[400px]">
                    <Title
                        title="Say hello 👋"
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
                                className="bottom-line md:mb-8 md:text-[56px] text-[42px] leading-[48px] md:leading-[72px] lg:text-[72px] lg:leading-[84px] font-semibold"
                            >
                                Let's Work
                                <br />
                                Together.
                            </h3>
                            <h1
                                data-aos="fade-up"
                                data-aos-once="false"
                                data-aos-duration="1000"
                                className="text-xl text-[#6b6b6b]"
                            >
                                I'd love to meet up with you to discuss your
                                venture, and potential collaborations.
                            </h1>
                        </div>
                    </Title>
                </div>

                <div className="grid grid-cols-1 960:grid-cols-2 mb-12">
                    <div
                        className="max-w-full lg:max-w-[340px]"
                        data-aos-easing="ease-out-cubic"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <ContactList className="text-base md:text-lg mb-8 960:mb-0 " />
                    </div>
                    <div
                        data-aos-easing="ease-out-cubic"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                    >
                        <ContactForm />
                    </div>
                </div>

                <ContactSocial />
                <ContactFigure />
            </div>
        </div>
    )
}
