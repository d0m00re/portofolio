"use client"

import React from 'react'
import { Button } from '../ui/button';

import { Instagram, Linkedin, LucideIcon } from 'lucide-react';
import { Github } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { navigate } from '../Project/action';

type Props = {}

type TLinkArrElem = {
    key: string;
    name: string;
    link : string;
}

const linkArr: TLinkArrElem[] = [
    {
        key: "e_home",
        name: "Home",
        link : "/"
    }, {
        key: "e_skill",
        name: "Skill",
        link : "/"
    }, {
        key: "e_projects",
        name: "Projects",
        link : "/"
    }
];

function NavbarElem(props: TLinkArrElem) {
    return (<li className='cursor-pointer' onClick={() => navigate(props.link)}>
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
        <div className="bg-green-500 hover:bg-green-300 rounded-full p-3 border-2 border-black cursor-pointer ease-in duration-100">
            <props.icon className='w-4 h-4' />
        </div>
    )
}

function Navbar({ }: Props) {
    return (
        <header className='flex flex-row justify-between p-2 items-center'>
            <p className="text-green-800 text-2xl">PICKLE</p>
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

            <Button onClick={() => navigate("/contact")} variant="outline" className='text-lg'>Let s connect</Button>

        </header>
    )
}

export default Navbar