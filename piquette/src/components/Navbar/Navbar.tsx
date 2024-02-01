"use client"

import React from 'react'
import { Button } from '../ui/button';
import { navigate } from '@/libNextjs/action';
import navbarData from "@/data/navbar.data.json";
import NavbarElem from './components/NavbarElem';
import NavbarSocialElem, { ESocialNetwork, TLinkSocialNetworkElem } from './components/NavbarSocialNetworkElem';

type TLinkArrElem = {
    id: string;
    name: string;
    link : string;
}

const linkArr: TLinkArrElem[] = navbarData.internalLink;

// todo : add zod validator
const linkSocialArr: TLinkSocialNetworkElem[] = navbarData.socialLink as TLinkSocialNetworkElem[];


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