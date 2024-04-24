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

function UpholsteryCategory({title, children}: ServiceProps) {
    return (
        <AccordionItem value={title} className={'border-0 space-y-2'}>
            <AccordionTrigger className={'border-2 border-primary bg-gray-100 rounded-sm px-4 text-secondary text-lg'}>{title}</AccordionTrigger>
            <AccordionContent className={'space-y-2'}>
                {children}
            </AccordionContent>
        </AccordionItem>
    );
}

export default UpholsteryCategory;