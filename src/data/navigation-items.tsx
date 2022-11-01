import {FaXingSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';

export const NavigationItems = [
    {id: 1, text: "About"   , ref: "/about"},
    {id: 2, text: "Resume"  , ref: "/resume"},
    {id: 3, text: "Home"    , ref: "/"},
    {
        id: 4,
        text: "Xing",
        ref: "https://www.xing.com/profile/Zachary_Slade",
        target: "_blank",
        icon: <FaLinkedin/>,
    },
    {
        id: 5,
        text: "LinkedIn",
        ref: "https://www.linkedin.com/in/zacharyslade1",
        target: "_blank",
        icon: <FaXingSquare/>,
    },
    {
        id: 6,
        text: "GitHub",
        ref: "https://github.com/stoating",
        target: "_blank",
        icon: <FaGithub/>,
    },
    {id: 7, text: "Stoating", ref: "/stoating"},
    {id: 8, text: "Contact" , ref: "/contact"},
    {id: 9, text: "OnePager" , ref: "/onepage"},
]