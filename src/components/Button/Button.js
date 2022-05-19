export default function Button({ className, children, onClick, ...props }) {
    return (
        <button
            onClick={onClick}
            {...props}
            className="w-full h-[64px] sm:w-[220px] text-base lg:w-[266px] lg:h-[80px] lg:text-lg rounded-[20px] text-white bg-[#4c40f7] flex items-center justify-center transition-all duration-300"
        >
            {children}
        </button>
    )
}
