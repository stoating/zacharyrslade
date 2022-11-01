import {FaXingSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';

export const NavigationItems = [
    {id: 1, text: "Home"    , ref: "/"},
    {
        id: 2,
        text: "Xing",
        ref: "https://www.xing.com/profile/Zachary_Slade",
        target: "_blank",
        icon: <FaLinkedin/>,
    },
    {
        id: 3,
        text: "LinkedIn",
        ref: "https://www.linkedin.com/in/zacharyslade1",
        target: "_blank",
        icon: <FaXingSquare/>,
    },
    {
        id: 4,
        text: "GitHub",
        ref: "https://github.com/stoating",
        target: "_blank",
        icon: <FaGithub/>,
    },
]