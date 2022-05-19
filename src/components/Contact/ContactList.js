import { CONTACT_INFO } from '../../constant'
import ContactItem from './ContactItem'

export default function ContactList({ className }) {
    return (
        <ul className={className}>
            {Object.keys(CONTACT_INFO).map((key, index) => {
                const { text, icon } = CONTACT_INFO[key]
                return (
                    <li className="py-1 md:py-4" key={index}>
                        <ContactItem link="#">
                            <span className="text-[#4c40f7] mr-4 md:mr-8 flex justify-center items-center w-6 h-8">
                                {icon}
                            </span>
                            <span className="">{text}</span>
                        </ContactItem>
                    </li>
                )
            })}
        </ul>
    )
}
