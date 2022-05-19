export default function ScrollButton({ onClick, children }) {
    return (
        <button
            onClick={onClick}
            className="w-14 h-14 lg:w-[80px] lg:h-[80px] rounded-full btn-shadow flex items-center justify-center bg-white text-base lg:text-2xl mr-6"
        >
            {children}
        </button>
    )
}
