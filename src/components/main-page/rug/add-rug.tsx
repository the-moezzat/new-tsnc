'use client'
import React from 'react';
import SelectOption from "@/components/controller/select-option";
import {Input} from "@/components/ui/input";
import Toggle from "@/components/controller/toggle";
import {Button} from "@/components/ui/button";
import ServiceItem from "@/components/main-page/service-item";
import rugData from '../data/rugData.json';
import {useAppStore} from "@/stores/app-store";
import {calculateSizeInSquareFeet} from "@/util/unit-converter";
import RugForm from "@/components/main-page/rug/rug-form";
import {RugType} from "@/types/rug-type";

function AddRug() {

    const {addRug} = useAppStore(state => state);
    const [rug, setRug] = React.useState<RugType>();

    function handleAddRug() {
        if (!rug) return;
        addRug(rug);
    }

    return (
        <ServiceItem title={''} description={''}>

            <RugForm onChange={setRug}/>

            <div className={'flex justify-end mt-6' }>
                <Button type={'button'} variant={'default'} size={'lg'} onClick={handleAddRug}>Add</Button>
            </div>
        </ServiceItem>
    );
}

export default AddRug;