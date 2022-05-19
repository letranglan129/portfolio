import SocialLink from '../SocialLink/SocialLink'

export default function SocialButton({ children, link }) {
    return (
        <div>
            <SocialLink link={link}>{children}</SocialLink>
        </div>
    )
}
