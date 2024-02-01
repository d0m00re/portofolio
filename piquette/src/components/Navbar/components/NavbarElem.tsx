"use client"

import React from 'react'
import { navigate } from '@/libNextjs/action';

type TLinkArrElem = {
    id: string;
    name: string;
    link : string;
}

function NavbarElem(props: TLinkArrElem) {
    return (<li className='cursor-pointer' onClick={() => navigate(props.link)}>
        {props.name}
    </li>)
}

export default NavbarElem;