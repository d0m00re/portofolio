import React from 'react'
import { Badge } from '../ui/badge'
import Image from 'next/image'
import heroData from "@/data/hero.data.json";

function Hero() {
    return (
        <section className="flex flex-col-reverse sm:flex-row gap-2 w-full items-center sticky inset-x-0 top-20 mb-28">
            <div className='flex flex-col w-full sm:w-1/2 gap-2'>
                <h1 className="text-4xl">{heroData.title}</h1>
                <p>{heroData.desc}</p>
                <div className='flex flex-row gap-1 flex-wrap'>{
                    heroData.techno.map(elem => <Badge key={elem}>#{elem}</Badge>)
                }</div>
            </div>
            <div className='flex flex-col w-full sm:w-1/2 items-center'>
                <Image
                    src="/hero/me.jpg"
                    width={300}
                    height={300}
                    alt="Pickle"
                    className='rounded-full'
                />
            </div>
        </section>
    )
}

export default Hero