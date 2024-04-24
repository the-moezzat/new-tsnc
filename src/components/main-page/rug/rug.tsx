'use client'
import React from 'react';
import AddRug from "@/components/main-page/rug/add-rug";
import Service from "@/components/main-page/service";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {useAppStore} from "@/stores/app-store";
import ServiceItem from "@/components/main-page/service-item";
import RugItem from "@/components/main-page/rug/rug-item";

function Rug() {

    const {rugs} = useAppStore(state => state);

    return (
        <Service title={'Rug Cleaning'}>
            <AddRug/>

                {rugs.length > 0 && <Accordion type={'multiple'} className={'space-y-2'}>
                    {rugs.map((rug) => {
                        return (<RugItem rug={rug} key={rug.id}>
                                {rug.name}
                            </RugItem>
                        )
                    })}
                </Accordion>}
        </Service>
    );
}

export default Rug;