"use client"

import React from 'react'
import { Linkedin, LucideIcon } from 'lucide-react';
import { Github } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { navigate } from '@/libNextjs/action';

export enum ESocialNetwork {
    linkedin = "linkedin",
    facebook = "facebook",
    youtube = "youtube",
    medium = "medium",
    github = "github"
}

export const RSocialNetwork : Record<ESocialNetwork,  LucideIcon> = {
    linkedin : Linkedin,
    facebook : Facebook,
    youtube : Youtube,
    medium : Linkedin,
    github : Github
}

export type TLinkSocialNetworkElem = {
    id: string;
    social: ESocialNetwork
    name: string;
    link: string;
}

function NavbarSocialElem(props: TLinkSocialNetworkElem) {
    const Icon = RSocialNetwork[props.social];
    
    return (
        <div onClick={() => navigate(props.link)} className="bg-green-500 hover:bg-green-300 rounded-full p-3 border-2 border-black cursor-pointer ease-in duration-100">
            <Icon className='w-4 h-4' />
        </div>
    )
}

export default NavbarSocialElem;