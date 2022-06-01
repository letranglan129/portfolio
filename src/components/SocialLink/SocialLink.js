export default function SocialLink({ children, className, ...props }) {
    const { link } = props

    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={`nav-link ${className}`}
        >
            {children}
        </a>
    )
}
