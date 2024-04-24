import React from 'react';
import Image from "next/image";
import { ChevronRight} from "lucide-react";
import {Button} from "@/components/ui/button";

function FloatingDock() {
    return (
        <nav className={'flex justify-between gap-4 items-center px-4 py-2 bg-white shadow-2xl fixed bottom-0 left-0 w-full'}>


            <Button disabled={true} size={'lg'} variant={'default'} className={'flex gap-2 items-center'}>
                Next (scheduling)
                <ChevronRight />
            </Button>
        </nav>
    );
}

export default FloatingDock;