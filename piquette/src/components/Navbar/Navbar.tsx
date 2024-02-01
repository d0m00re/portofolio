"use client"

import React from 'react'
import { Button } from '../ui/button';

import { Instagram, Linkedin, LucideIcon } from 'lucide-react';
import { Github } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { navigate } from '../Project/action';

type TLinkArrElem = {
    id: string;
    name: string;
    link : string;
}

const linkArr: TLinkArrElem[] = [
    {
        id: "e_home",
        name: "Home",
        link : "/"
    }, {
        id: "e_skill",
        name: "Skill",
        link : "/"
    }, {
        id: "e_projects",
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
    id: string;
    social: "linkedin" | "facebook" | "youtube" | "medium" | "github";
    name: string;
    icon: LucideIcon;
    link: string;
}

const linkSocialArr: TLinkSocialNetwork[] = [
    {
        id: "linkedin",
        social: "linkedin",
        name: "linke",
        link: "https://linkedin.com",
        icon: Linkedin
    }, {
        id: "youtube",
        social: "youtube",
        name: "youtube",
        link: "https://youtube.com",
        icon: Youtube
    }, {
        id: "github",
        social: "github",
        name: "github",
        link: "https://github.com",
        icon: Github
    }
]

function NavbarSocialElem(props: TLinkSocialNetwork) {
    return (
        <div onClick={() => navigate(props.link)} className="bg-green-500 hover:bg-green-300 rounded-full p-3 border-2 border-black cursor-pointer ease-in duration-100">
            <props.icon className='w-4 h-4' />
        </div>
    )
}

function Navbar() {
    return (
        <header className='flex flex-row justify-between p-2 items-center'>
            <p className="text-green-800 text-2xl">PICKLE</p>
            <ul className='flex flex-row gap-3'>
                {
                    linkArr.map(elem =>
                        <NavbarElem
                            key={elem.id}
                            {...elem}
                        />)
                }
            </ul>

            <ul className='flex flex-row gap-3'>
                {
                    linkSocialArr.map(elem => <NavbarSocialElem key={elem.id} {...elem} />)
                }
            </ul>

            <Button onClick={() => navigate("/contact")} variant="outline" className='text-lg'>Let s connect</Button>

        </header>
    )
}

export default Navbar