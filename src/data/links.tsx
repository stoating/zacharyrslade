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

export const links = [
    {
        text: "LinkedIn",
        ref: "https://www.linkedin.com/in/zacharyslade1",
        icon: <FaLinkedin/>,
        type: 'professional',
        for: ['zachary'],
    },
    {
        text: "Xing",
        ref: "https://www.xing.com/profile/Zachary_Slade",
        icon: <FaXingSquare/>,
        type: 'professional',
        for: ['zachary'],
    },
    {
        text: "GitHub",
        ref: "https://github.com/stoating",
        icon: <FaGithub/>,
        type: 'professional',
        for: ['zachary', 'stoating'],
    },
    {
        text: "Facebook",
        ref: "https://www.facebook.com/zslade",
        icon: <FaFacebookSquare/>,
        type: 'social',
        for: ['zachary'],
    },
    {
        text: "Facebook",
        ref: "https://www.facebook.com/profile.php?id=100087603367699",
        icon: <FaFacebookSquare/>,
        type: 'social',
        for: ['stoating'],
    },
    {
        text: "Instagram",
        ref: "https://www.instagram.com/stoating",
        icon: <FaInstagramSquare/>,
        type: 'media',
        for: ['zachary'],
    },
    {
        text: "Instagram",
        ref: "https://www.instagram.com/stoat1ng/",
        icon: <FaInstagramSquare/>,
        type: 'media',
        for: ['stoating'],
    },
    {
        text: "Twitter",
        ref: "https://twitter.com/Stoating",
        icon: <FaTwitterSquare/>,
        type: 'social',
        for: ['stoating'],
    },
    {
        text: "TikTok",
        ref: "https://www.tiktok.com/@stoating",
        icon: <FaTiktok/>,
        type: 'media',
        for: ['stoating'],
    },
    {
        text: "YouTube",
        ref: "https://www.youtube.com/channel/UCUA0VYgaYQfoBbPze0d4G3Q",
        icon: <FaYoutube/>,
        type: 'media',
        for: ['stoating'],
    },
    {
        text: "Patreon",
        ref: "https://www.patreon.com/user?u=81255911",
        icon: <FaPatreon/>,
        type: 'support',
        for: ['stoating'],
    },
    {
        text: "Ko-Fi",
        ref: "https://ko-fi.com/stoating",
        icon: <SiKofi/>,
        type: 'support',
        for: ['stoating'],
    },
    {
        text: "YouTube",
        ref: "https://www.youtube.com/channel/UCFIig6ZKsJhRnpIw0MOmL-Q",
        icon: <FaYoutube/>,
        type: 'media',
        for: ['zachary'],
    },
    {
        text: "Resume - DE",
        ref: "/documents/Zachary_Slade_Resume_DE.pdf",
        icon: <FaFilePdf/>,
        type: 'pdf',
        for: ['zachary'],
    },
    {
        text: "Resume - EN",
        ref: "/documents/Zachary_Slade_Resume_EN.pdf",
        icon: <FaFilePdf/>,
        type: 'pdf',
        for: ['zachary'],
    },
]