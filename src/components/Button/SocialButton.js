import SocialLink from '../SocialLink/SocialLink'

export default function SocialButton({ children, link, className }) {
    return (
        <>
            <SocialLink className={className} link={link}>{children}</SocialLink>
        </>
    )
}
