import { useEffect } from 'react'
import Portal from '../Portal/Portal'

export default function Toast({
    isOpen,
    message,
    type,
    onClose,
    autoHide,
    children,
}) {
    useEffect(() => {

        if(isOpen && autoHide) {
            setTimeout(() => {
                onClose()
            }, autoHide)
        }

    }, [isOpen])

    switch (type) {
        case 'success':
            children = <Toast.Success onClose={onClose} message={message} />
            break
        case 'error':
            children = <Toast.Error onClose={onClose} message={message} />
            break
        default:
            children = <Toast.Default onClose={onClose} message={message} />
    }

    return <Portal>{isOpen && <div className="toast">{children}</div>}</Portal>
}

Toast.Layout = ({ children, onClose }) => {
    return (
        <div className="bg-slate-100 shadow-xl pb-4 px-4 pt-2 rounded-lg">
            <div className="text-right">
                <span
                    className="text-lg leading-[0] ml-auto text-slate-400 hover:text-slate-800 cursor-pointer"
                    onClick={onClose}
                >
                    <i className="fas fa-times-circle"></i>
                </span>
            </div>
            <div className="flex items-center">{children}</div>
        </div>
    )
}

Toast.Success = ({ message, onClose }) => {
    return (
        <Toast.Layout onClose={onClose}>
            <span className="text-green-600 mr-2 text-3xl">
                <i className="fas fa-check-circle"></i>
            </span>
            <span>{message}</span>
        </Toast.Layout>
    )
}

Toast.Error = ({ message, onClose }) => {
    return (
        <Toast.Layout onClose={onClose}>
            <span className="text-red-600 mr-2 text-3xl">
                <i className="fas fa-exclamation-circle"></i>
            </span>
            <span>{message}</span>
        </Toast.Layout>
    )
}

Toast.Default = ({ message, onClose }) => {
    return (
        <Toast.Layout onClose={onClose}>
            <span>{message}</span>
        </Toast.Layout>
    )
}
