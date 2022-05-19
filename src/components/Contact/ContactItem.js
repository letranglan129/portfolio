export default function ContactItem({ children, ...props }) {
    const { link } = props
    return (
        <a href={link} className="flex leading-8">
            {children}
        </a>
    )
}
