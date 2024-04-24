'use client'
import React from 'react';
import { Separator } from "@/components/ui/separator"


export default function Steps() {
    return (
        <div className={`grid grid-cols-[max-content,1fr,max-content,1fr,max-content,1fr,max-content] items-center w-full px-4 py-2`}>
            <StepBlock number={1} isActive/>
            <Separator className={'flex-shrink flex-grow-0 w-full'}/>
            <StepBlock number={2}/>
            <Separator className={'w-full'}/>
            <StepBlock number={3}/>
            <Separator className={'w-full'}/>
            <StepBlock number={4}/>
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