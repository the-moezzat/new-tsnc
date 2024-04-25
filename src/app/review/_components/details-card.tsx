import React from 'react';
import {Button} from "@/components/ui/button";
import Link from "next/link";

interface DetailsCardProps {
    title: string;
    editPath: string;
    children: React.ReactNode;
}

function DetailsCard({title, editPath, children}: DetailsCardProps) {
    return (
        <div className={'border rounded-sm p-3 flex flex-col gap-3'}>
            <h2 className={'text-lg font-semibold text-gray-800'}>
                {title}
            </h2>

            <div>
                {children}
            </div>

            <Button asChild className={'self-end'} size={'lg'}>
                <Link href={editPath}>
                    Edit
                </Link>
            </Button>
        </div>
    );
}

export default DetailsCard;