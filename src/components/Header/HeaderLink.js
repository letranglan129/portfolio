export default function HeaderLink({ children, ...props }) {
    const { link } = props

    let Comps =  'a'
    if(link) {
        Comps = 'span'    
    }

    return (
        <Comps
            className="text-[32px] leading[48px] md:text-[42px] md:leading-[56px] xl:text-7xl xl:leading-[84px] font-semibold  hover:text-[#4c40f7]"
            href={link}
        >
            {children}
        </Comps>
    )
}
