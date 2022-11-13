import {FaXingSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaFilePdf} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaTiktok} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaPatreon} from 'react-icons/fa';
import {SiKofi} from 'react-icons/si';

export const Links = [
    {
        id: 1,
        text: "LinkedIn",
        ref: "https://www.linkedin.com/in/zacharyslade1",
        icon: <FaLinkedin/>,
        type: 'professional',
        for: ['zachary'],
    },
    {
        id: 2,
        text: "Xing",
        ref: "https://www.xing.com/profile/Zachary_Slade",
        icon: <FaXingSquare/>,
        type: 'professional',
        for: ['zachary'],
    },
    {
        id: 3,
        text: "GitHub",
        ref: "https://github.com/stoating",
        icon: <FaGithub/>,
        type: 'professional',
        for: ['zachary', 'stoating'],
    },
    {
        id: 4,
        text: "Facebook",
        ref: "https://www.facebook.com/zslade",
        icon: <FaFacebookSquare/>,
        type: 'social',
        for: ['zachary'],
    },
    {
        id: 5,
        text: "Facebook",
        ref: "https://www.facebook.com/profile.php?id=100087603367699",
        icon: <FaFacebookSquare/>,
        type: 'social',
        for: ['stoating'],
    },
    {
        id: 6,
        text: "Instagram",
        ref: "https://www.instagram.com/stoating",
        icon: <FaInstagramSquare/>,
        type: 'media',
        for: ['zachary'],
    },
    {
        id: 7,
        text: "Instagram",
        ref: "https://www.instagram.com/stoat1ng/",
        icon: <FaInstagramSquare/>,
        type: 'media',
        for: ['stoating'],
    },
    {
        id: 8,
        text: "Twitter",
        ref: "https://twitter.com/Stoating",
        icon: <FaTwitterSquare/>,
        type: 'social',
        for: ['stoating'],
    },
    {
        id: 9,
        text: "TikTok",
        ref: "https://www.tiktok.com/@stoating",
        icon: <FaTiktok/>,
        type: 'media',
        for: ['stoating'],
    },
    {
        id: 10,
        text: "YouTube",
        ref: "https://www.youtube.com/channel/UCUA0VYgaYQfoBbPze0d4G3Q",
        icon: <FaYoutube/>,
        type: 'media',
        for: ['stoating'],
    },
    {
        id: 11,
        text: "Patreon",
        ref: "https://www.patreon.com/user?u=81255911",
        icon: <FaPatreon/>,
        type: 'support',
        for: ['stoating'],
    },
    {
        id: 12,
        text: "Ko-Fi",
        ref: "https://ko-fi.com/stoating",
        icon: <SiKofi/>,
        type: 'support',
        for: ['stoating'],
    },
    {
        id: 13,
        text: "YouTube",
        ref: "https://www.youtube.com/channel/UCFIig6ZKsJhRnpIw0MOmL-Q",
        icon: <FaYoutube/>,
        type: 'media',
        for: ['zachary'],
    },
    {
        id: 14,
        text: "Resume - DE",
        ref: "/documents/Zachary_Slade_Resume_DE.pdf",
        icon: <FaFilePdf/>,
        type: 'pdf',
        for: ['zachary'],
    },
    {
        id: 15,
        text: "Resume - EN",
        ref: "/documents/Zachary_Slade_Resume_EN.pdf",
        icon: <FaFilePdf/>,
        type: 'pdf',
        for: ['zachary'],
    },
]