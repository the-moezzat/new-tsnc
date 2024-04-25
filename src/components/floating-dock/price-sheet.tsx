'use client'
import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {useAppStore} from "@/stores/app-store";
import {Button} from "@/components/ui/button";
import {ChevronUp} from "lucide-react";
import Summary from "@/components/cart/summary";
import Cart from "@/components/cart/cart";

function PriceSheet() {

    const {totalPrice} = useAppStore()

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant={'outline'} size={'lg'} className={'flex items-center gap-2'}>
                    <ChevronUp/>
                    Total: $
                    {totalPrice.toFixed(2)}
                </Button>
            </SheetTrigger>
            <SheetContent side={'bottom'} className={'bg-gray-100'}>
                <Cart/>
                <Summary/>
                <SheetDescription className={'text-center'}>
                    You can&lsquo;t continue until you&lsquo;ve added at least $199 of services to the Quote
                </SheetDescription>
            </SheetContent>
        </Sheet>

    );
}

export default PriceSheet;