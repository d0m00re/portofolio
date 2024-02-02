import React from 'react'
import { navigate } from '@/libNextjs/action';
import { Cat } from 'lucide-react';

function LogoText() {
  return (
    <div className='flex flex-row gap-2 cursor-pointer items-center' onClick={() => navigate("/")}>
        <Cat className='w-7 h-7' />
        <p className="text-black text-2xl cursor-pointer" >PICKLE</p>
    </div>
  )
}

export default LogoText