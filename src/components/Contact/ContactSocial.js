import { SOCIAL_LINK } from '../../constant'
import SocialButton from '../Button/SocialButton'

export default function ContactSocial() {
    return (
        <div>
            <div className="text-xl font-semibold mb-8">Let's Connect 🤝</div>

            <ul className="grid grid-cols-2 md:grid-cols-4">
                {Object.keys(SOCIAL_LINK).map((key, index) => (
                    <li
                        className="button-social m-2"
                        key={index}
                        data-aos-easing="ease-out-cubic"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-once="false"
                        data-aos-delay={index * 300}
                    >
                        <SocialButton link={SOCIAL_LINK[key].link}>
                            <span className="mr-2">
                                {SOCIAL_LINK[key].icon}
                            </span>{' '}
                            {SOCIAL_LINK[key].name}
                        </SocialButton>
                    </li>
                ))}
            </ul>
        </div>
    )
}
