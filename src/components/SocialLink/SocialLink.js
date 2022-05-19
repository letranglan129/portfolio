export default function SocialLink({ children, ...props }) {
    const { link } = props

    return (
        <a href={link} target="_blank" className="nav-link">
            {children}
        </a>
    )
}
