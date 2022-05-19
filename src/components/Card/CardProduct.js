export default function CardProduct({ name, srcImage, demoURL, sourceURL }) {
    return (
        <>
            <div className="card">
                <div className="relative flex-1">
                    <img src={srcImage} alt=""  className='h-full'/>
                    <a target="_blank" href={demoURL || '#'}>
                        <div className="card-box">
                            Go to
                            <br />
                            Demo
                        </div>
                    </a>
                </div>
                <div className="card-content">
                    <div className="text-xl mb-4 font-semibold">
                        <a target="_blank" href={demoURL || '#'}>
                            {name}
                        </a>
                    </div>
                    <div className="text-sm text-[#9d9d9d]">
                        Demo:{' '}
                        <a
                            target="_blank"
                            className="hover:text-blue-700 hover:underline"
                            href={demoURL || '#'}
                        >
                            Click here
                        </a>
                    </div>
                    <div className="text-sm text-[#9d9d9d]">
                        Source:{' '}
                        <a
                            target="_blank"
                            className="hover:text-blue-700 hover:underline"
                            href={sourceURL || '#'}
                        >
                            Click here
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
