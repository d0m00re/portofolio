"use client"

import React from 'react';
import Image from 'next/image'
import projectJSON from "@/data/project.data.json";
import { redirect } from 'next/navigation';
import { navigate } from './action';

const projects : IProjectElem[] = projectJSON;

function ProjectElem(props: IProjectElem) {
    return <div
        onClick={() => {
            console.log(props)

            console.log(`redirect on : /project/${props.id}`)
            navigate(`/project/${props.id}`);
        }}
        className='w-full p-4 border-2 rounded-sm cursor-pointer'>
        <Image
            src={props.picture}
            width={500}
            height={300}
            alt="Background Image"
            className='rounded-sm'
        />
        <h1 className='font-bold'>{props.title}</h1>
    </div>
}

function Project() {
    return (
        <section>
            <h2 className='text-2xl p-2'>
                Projects : 
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4'>{
                projects.map(elem => <ProjectElem
                    key={elem.id}
                    {...elem}
                    />)
            }</div>
        </section>
    )
}

export default Project