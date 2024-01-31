import React from 'react'
import { Badge } from '../ui/badge'
import Image from 'next/image'


type Props = {}

const data = {
    title: "Jack Lapiquette",
    desc: "Hi, I'm a fullstack developer specializing in javascript stack.",
    techno: ["js", "ts", "react", "nextjs", "node", "express"]
}

function Hero({ }: Props) {
    return (
        <div className="flex flex-row gap-2 w-full max-w-2xl">
            <div className='flex flex-col w-1/2 gap-2'>
                <h1 className="text-4xl">{data.title}</h1>
                <p>{data.desc}</p>
                <div className='flex flex-row gap-1 flex-wrap'>{
                    data.techno.map(elem => <Badge>#{elem}</Badge>)
                }</div>
            </div>
            <div className='flex flex-col w-1/2'>
                <Image
                    src="/hero/me.jpg"
                    width={300}
                    height={300}
                    alt="Background Image"
                    className='rounded-sm'
                />
            </div>
        </div>
    )
}

export default Hero