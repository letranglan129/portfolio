import { createPortal } from 'react-dom'

let portalElement = document.getElementById('portal')

if (!portalElement) {
    portalElement = document.createElement('div')
    portalElement.id = 'portal'
    document.body.appendChild(portalElement)
}

const Portal = ({ children }) => createPortal(children, portalElement)

export default Portal
