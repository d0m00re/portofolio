"use client"

import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label"

const ValidateContactForm = z.object({
    email: z.string(),
    subject: z.string(),
    msg: z.string()
});

type TContactForm = z.infer<typeof ValidateContactForm>;

// -------------------------------------

const commonCss = "w-full max-w-sm";
const labelCss = "text-black";

function Page() {
    const { register, handleSubmit } = useForm<TContactForm>({
        resolver: zodResolver(ValidateContactForm)
    });

    const onSubmit: SubmitHandler<TContactForm> = (data) => {
        console.log(data)
    };

    return (
        <section className='flex flex-col items-center w-full mt-6'>
            <div className='border border-green-950 rounded-lg p-5 bg-green-300'>
                <h1 className="text-4xl text-black">Contact Me</h1>
                <form className='flex flex-col gap-2 mt-4' onSubmit={handleSubmit(onSubmit)}>
                    <div className={commonCss}>
                        <Label htmlFor='email' className={labelCss}>email :</Label>
                        <Input className='border-green-950' id="email" {...register("email")} />
                    </div>
                    <div className={commonCss}>
                        <Label htmlFor='subject' className={labelCss}>subject :</Label>
                        <Input className='border-green-950' id="subject" {...register("subject")} />
                    </div>
                    <div className={commonCss}>
                        <Label htmlFor='msg' className={labelCss}>message :</Label>
                        <Input className='border-green-950' id="msg" {...register("msg")} />
                    </div>
                    <Button type="submit">Send it!</Button>
                </form>
            </div>
        </section>
    )
}

export default Page;