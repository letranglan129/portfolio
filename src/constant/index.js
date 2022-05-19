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

const SOCIAL_LINK = {
    facebook: {
        link: 'https://www.facebook.com/ltlan',
        name: 'Facebook',
        icon: <i className="fab fa-facebook-f"></i>,
    },
    linkedIn: {
        link: 'https://www.linkedin.com/in/ltlan',
        name: 'LinkedIn',
        icon: <i className="fab fa-linkedin-in"></i>,
    },
    github: {
        link: 'https://github.com/letranglan129',
        name: 'Github',
        icon: <i className="fab fa-github"></i>,
    },
    
    cv: {
        link: 'https://res.cloudinary.com/dtgkkyqm6/image/upload/v1652955022/portfolio/Le-Trang-Lan-TopCV.vn-190522.165253_iuvqpz.pdf',
        name: 'Download CV',
        icon: null,
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

export { CARD_CONTENT_LIST, CONTACT_INFO, SOCIAL_LINK, SCROLL_ROUTER }
