import { useStore } from '../../store/hooks'
import SocialLink from '../SocialLink/SocialLink'

export default function ContactSocial() {
    const [state] = useStore()

    return (
        <div>
            <div className="text-xl font-semibold mb-8">Let's Connect 🤝</div>

            <ul className="grid grid-cols-2 md:grid-cols-4">
                {Object.keys(state.socialLink).map((key, index) => (
                    <li
                        className="button-social m-2"
                        key={index}
                        data-aos-easing="ease-out-cubic"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-once="false"
                        data-aos-delay={index * 300}
                    >
                        <SocialLink link={state.socialLink[key].link} className='h-full w-full flex items-center justify-center'>
                            <span className="mr-2">
                                {state.socialLink[key].icon}
                            </span>{' '}
                            {state.socialLink[key].name}
                        </SocialLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}
