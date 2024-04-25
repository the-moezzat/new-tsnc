'use client'
import React from "react";
import {Accordion} from "@/components/ui/accordion";
import Carpet from "@/components/main-page/carpet";
import Upholstery from "@/components/main-page/upholstery";
import Rug from "@/components/main-page/rug/rug";
import {Button} from "@/components/ui/button";

function Page() {
    return (
        <main className={'px-4 py-8 space-y-6'}>
            <h1 className={'text-lg font-semibold text-gray-800'}>Select Specials & Services </h1>

            <Accordion type={'multiple'} className={'space-y-4'}>
                <Carpet/>
                <Upholstery/>
                <Rug/>
            </Accordion>

        </main>
    );
}

export default Page;
