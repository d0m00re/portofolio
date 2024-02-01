"use client"

import React from 'react'
import { usePathname, useParams, useSearchParams } from 'next/navigation'
import projectJSON from "@/data/project.data.json";
import Image from 'next/image';

type Props = {}

const getProject = (id: string) => {
  return projectJSON.find(e => e.id === id);
}

function page({ }: Props) {
  const params = useParams<{ id: string }>();
  const currentProject = getProject(params.id);

  if (!currentProject)
    return (<div>not found</div>)

  return (
    <div className="grid grid-flow-col-1 sm:grid-cols-2 pt-5">
      <div className="bg-slate-400">
        <Image
          src={currentProject.picture}
          alt="project image"
          width={600}
          height={600}
        />
      </div>
      <div className="bg-red-500">
        <h1 className='text-4xl'>{currentProject.title}</h1>
        <p className='text-sm'>{currentProject.description}</p>
      </div>
    </div>
  )
}

export default page