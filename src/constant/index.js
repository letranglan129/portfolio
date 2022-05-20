const CARD_CONTENT_LIST = [
    {
        src: './images/html.gif',
        title: 'HTML',
    },
    {
        src: './images/css.gif',
        title: 'CSS',
    },
    {
        src: './images/js.gif',
        title: 'Javascript',
    },
    {
        src: './images/bootstrap.gif',
        title: 'Bootstrap',
    },
    {
        src: './images/node.gif',
        title: 'Node JS',
    },
    {
        src: './images/react.gif',
        title: 'React JS',
    },
    {
        src: './images/mongodb.gif',
        title: 'MongoDB',
    },
    {
        src: './images/vscode.gif',
        title: 'VS Code',
    },
    {
        src: './images/tailwind.png',
        title: 'Tailwind CSS',
    },
    {
        src: './images/express.png',
        title: 'Express JS',
    },
]

const CONTACT_INFO = {
    address: {
        icon: <i className="fas fa-map-marked-alt"></i>,
        text: '43 D11 Street, Tay Thanh Ward, Tan Phu District, Ho Chi Minh City, Vietnam',
    },
    phone: {
        icon: <i className="fas fa-mobile-android"></i>,
        text: '039 3673 245',
    },
    email: {
        icon: <i className="fas fa-envelope"></i>,
        text: 'letranglan129@gmail.com',
    },
}

const SCROLL_ROUTER = [
    {
        name: 'About',
        link: 'goToAboutElement',
    },
    {
        name: 'Skills',
        link: 'goToSkillsElement',
    },
    {
        name: 'Products',
        link: 'goToProductsElement',
    },
    {
        name: 'Contact',
        link: 'goToContactElement',
    },
]

export { CARD_CONTENT_LIST, CONTACT_INFO, SCROLL_ROUTER }
