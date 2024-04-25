'use client'
import React from 'react';
import { Separator } from "@/components/ui/separator"
import {usePathname} from "next/navigation";


export default function Steps() {
    const pathname = usePathname().split('/')[1]

    function activeStep() {
        if (pathname === "") {
            return 1
        } else if (pathname === "appointment") {
            return 2
        }
        else if (pathname === "contact") {
            return 3
        }
        else if (pathname === "review") {
            return 4
        }

        return 1;
    }

    return (
        <div className={`grid grid-cols-[max-content,1fr,max-content,1fr,max-content,1fr,max-content] items-center w-full px-4 py-2 mt-6`}>
            <StepBlock number={1} isActive={activeStep() >= 1}/>
            <Separator className={'flex-shrink flex-grow-0 w-full'}/>
            <StepBlock number={2} isActive={activeStep() >=2}/>
            <Separator className={'w-full'}/>
            <StepBlock number={3} isActive={activeStep() >=3}/>
            <Separator className={'w-full'}/>
            <StepBlock number={4} isActive={activeStep() >=4}/>
        </div>
    );
}

function StepBlock({
    number,
    isActive,
}: Readonly<{
    number: number;
    isActive?: boolean;
}>) {
    return (
        <div className={`w-10 h-10 rounded-sm flex items-center justify-center ${isActive? 'bg-primary text-primary-foreground' : 'border text-gray-500'}  shrink-0`}>
            {number}
        </div>
    );
}