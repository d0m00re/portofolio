"use client"

import React, { useState, useEffect } from 'react'
import { Button } from '../ui/button';
import { navigate } from '@/libNextjs/action';
import navbarData from "@/data/navbar.data.json";
import NavbarElem from './components/NavbarElem';
import NavbarSocialElem, { ESocialNetwork, TLinkSocialNetworkElem } from './components/NavbarSocialNetworkElem';
import { ArrowRight, Menu } from 'lucide-react'
import { Separator } from "@/components/ui/separator"
import LogoText from './components/LogoText';

type TLinkArrElem = {
    id: string;
    name: string;
    link: string;
}

const linkArr: TLinkArrElem[] = navbarData.internalLink;

// todo : add zod validator
const linkSocialArr: TLinkSocialNetworkElem[] = navbarData.socialLink as TLinkSocialNetworkElem[];

function NavbarMobile() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleOpen = () => setIsOpen((prev) => !prev)

    return (<header className='flex justify-between sm:hidden p-5  sticky inset-x-0 top-0 z-40 bg-gradient-to-r from-emerald-500 to-emerald-900'>
        <LogoText />
        <Menu
            onClick={toggleOpen}
            className='relative z-50 h-8 w-8 text-black cursor-pointer'
        />
        {isOpen ?
            <div className='fixed p-4 gap-4 flex flex-col items-center animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full h-full bg-slate-50  pt-16'>
                <ul className='flex flex-row gap-3'>
                    {
                        linkArr.map(elem =>
                            <NavbarElem
                                key={elem.id}
                                {...elem}
                            />)
                    }
                </ul>

                <Separator orientation="horizontal" />

                <ul className='flex flex-row gap-3'>
                    {
                        linkSocialArr.map(elem => <NavbarSocialElem key={elem.id} {...elem} />)
                    }
                </ul>

                <Separator orientation="horizontal" />

                <Button onClick={() => {navigate("/contact"); setIsOpen(false)}} variant="outline" className='text-lg'>Let&apos;s connect</Button>

            </div>
            : <></>
        }
    </header>)
}

/*
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
*/

export default NavbarMobile;