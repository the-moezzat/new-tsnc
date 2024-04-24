import React from 'react';
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface ServiceProps {
    title: string;
    children: React.ReactNode;
}

function Service({title, children}: ServiceProps) {
    return (
            <AccordionItem value={title} className={'border-0 space-y-2'}>
                <AccordionTrigger className={'bg-primary rounded-sm px-4 text-white text-xl'}>{title}</AccordionTrigger>
                <AccordionContent className={'space-y-2'}>
                    {children}
                </AccordionContent>
            </AccordionItem>
    );
}

export default Service;