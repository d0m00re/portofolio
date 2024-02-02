"use client"

import React from 'react'
import { Button } from '../ui/button';
import { navigate } from '@/libNextjs/action';
import navbarData from "@/data/navbar.data.json";
import NavbarElem from './components/NavbarElem';
import NavbarSocialElem, { TLinkSocialNetworkElem } from './components/NavbarSocialNetworkElem';
import LogoText from './components/LogoText';
import { Mail } from "lucide-react";


/*
type TLinkArrElem = {
    id: string;
    name: string;
    link: string;
}
*/
//const linkArr: TLinkArrElem[] = navbarData.internalLink;

// todo : add zod validator
const linkSocialArr: TLinkSocialNetworkElem[] = navbarData.socialLink as TLinkSocialNetworkElem[];

function NavbarNormal() {
    return (
        <header className='hidden sm:flex flex-row justify-between pt-2 pb-2 items-center pl-24 pr-24 sticky inset-x-0 top-0 z-40 bg-gradient-to-r from-emerald-500 to-emerald-900'>
            <LogoText />
            {/*
            <ul className='flex flex-row gap-3'>
                {
                    linkArr.map(elem =>
                        <NavbarElem
                            key={elem.id}
                            {...elem}
                        />)
                }
            </ul>
            */}
            <ul className='flex flex-row gap-3'>
                {
                    linkSocialArr.map(elem => <NavbarSocialElem key={elem.id} {...elem} />)
                }
            </ul>
            <Button onClick={() => navigate("/contact")} variant="outline" className='text-lg'>
                <Mail className="mr-2 h-4 w-4" />
                Let&apos;s connect
            </Button>
        </header>
    )
}

export default NavbarNormal;