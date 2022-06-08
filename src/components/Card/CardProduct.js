import { useStore } from '../../store'

export default function CardProduct({
    name,
    srcImage,
    demoURL,
    sourceURL,
    tech,
}) {
    const [state, dispatch] = useStore()

    return (
        <>
            <div className="card">
                <div className="relative flex-1">
                    <img src={srcImage} alt="" className="h-full" />
                    <a target="_blank" rel="noreferrer" href={demoURL || '#'}>
                        <div className="card-box">
                            Go to
                            <br />
                            Demo
                        </div>
                    </a>
                </div>
                <div className="card-content">
                    <div className="text-xl mb-2 font-semibold">
                        <a
                            target="_blank"
                            href={demoURL || '#'}
                            rel="noreferrer"
                        >
                            {name}
                        </a>
                    </div>

                    <div className="flex flex-wrap">
                        {tech?.map((el, index) => {
                            const tech = state.techList?.find(
                                item => item?.name === el
                            )
                            return (
                                <div
                                    key={index}
                                    className="w-10 h-10 mb-2 mr-2"
                                >
                                    <img src={tech?.image} alt=''/>
                                </div>
                            )
                        })}
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-3 text-sm text-white text-center">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center px-4 py-2 bg-[#4c40f7] rounded-lg flex-1 whitespace-nowrap min-w-max"
                            href={demoURL || '#'}
                        >
                            <span className="text-xl">
                                <i className="far fa-external-link"></i>
                            </span>
                            <span className="ml-2">Live demo</span>
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center px-4 py-2 bg-slate-600 rounded-lg flex-1 whitespace-nowrap min-w-max"
                            href={sourceURL || '#'}
                        >
                            <span className="text-xl">
                                <i className="fab fa-github"></i>
                            </span>
                            <span className="ml-2">View Github</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
