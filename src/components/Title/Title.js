export default function Title({ children, title, ...props }) {
    return (
        <>
            <div {...props}>
                <h1 className="text-base lg:text-xl font-semibold pl-16">
                    {title}
                </h1>
            </div>
            {children}
        </>
    )
}
