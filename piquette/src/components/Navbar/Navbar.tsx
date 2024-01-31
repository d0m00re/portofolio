import React from 'react'
import { Button } from '../ui/button';

import { Instagram, Linkedin, LucideIcon } from 'lucide-react';
import { Github } from 'lucide-react';
import { Youtube } from 'lucide-react';

type Props = {}

type TLinkArrElem = {
    key: string;
    name: string;
}

const linkArr: TLinkArrElem[] = [
    {
        key: "e_home",
        name: "Home"
    }, {
        key: "e_skill",
        name: "Skill"
    }, {
        key: "e_projects",
        name: "Projects"
    }
];

function NavbarElem(props: TLinkArrElem) {
    return (<li className='cursor-pointer'>
        {props.name}
    </li>)
}

type TLinkSocialNetwork = {
    key: string;
    social: "linkedin" | "facebook" | "youtube" | "medium" | "github";
    name: string;
    icon: LucideIcon;
    link: string;
}

const linkSocialArr: TLinkSocialNetwork[] = [
    {
        key: "linkedin",
        social: "linkedin",
        name: "linke",
        link: "https://linkedin.com",
        icon: Linkedin
    }, {
        key: "youtube",
        social: "youtube",
        name: "youtube",
        link: "https://youtube.com",
        icon: Youtube
    }, {
        key: "github",
        social: "github",
        name: "github",
        link: "https://github.com",
        icon: Github
    }
]

function NavbarSocialElem(props: TLinkSocialNetwork) {
    return (
        <div className="bg-blue-500 hover:bg-blue-300 rounded-full p-3 border-2 border-black cursor-pointer ease-in duration-100">
            <props.icon className='w-4 h-4' />
        </div>
    )
}

function Navbar({ }: Props) {
    return (
        <header className='flex flex-row justify-between p-2 items-center'>
            <p>LOGO</p>
            <ul className='flex flex-row gap-3'>
                {
                    linkArr.map(elem =>
                        <NavbarElem
                            {...elem}
                        />)
                }
            </ul>

            <ul className='flex flex-row gap-3'>
                {
                    linkSocialArr.map(elem => <NavbarSocialElem {...elem} />)
                }
            </ul>

            <Button variant="outline" className='text-lg'>Let s connect</Button>

        </header>
    )
}

export default Navbar