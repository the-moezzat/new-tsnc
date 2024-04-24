import React, {useEffect} from 'react';
import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {RugType} from "@/types/rug-type";
import RugForm from "@/components/main-page/rug/rug-form";
import {Button} from "@/components/ui/button";
import {useAppStore} from "@/stores/app-store";
import {Check} from "lucide-react";

interface RugItemProps {
    rug: RugType;
    children: React.ReactNode;

}

function RugItem({rug, children}: RugItemProps) {

    const {removeRug, editRug} = useAppStore(state => state);
    const [updatedRug, setUpdatedRug] = React.useState<RugType>();

    const [updating, setUpdating] = React.useState(false);

    useEffect(() => {
        setTimeout(() => {
            setUpdating(false);
        }, 500);
    }, [updating])

    function handleUpdateRug() {
        if (!updatedRug) return;

        setUpdating(true)

        editRug(rug.id, updatedRug)
    }

    return (
        <AccordionItem value={`${rug.id}`} className={'border-0'}>
            <AccordionTrigger
                className={'bg-gray-100 rounded-t-sm px-4 text-secondary text-lg font-bold '}>{rug.name} ({rug.width} x {rug.length}{rug.unit})</AccordionTrigger>
            <AccordionContent className={'flex flex-col gap-2 bg-gray-100 px-4'}>

                <RugForm rug={rug} onChange={setUpdatedRug}/>

                <div className={'flex items-center gap-4 mt-4 justify-end'}>
                    <Button variant={'outline'}
                            className={'bg-red-400 text-white hover:bg-red-500 hover:text-white transition-colors'}
                            size={'lg'} onClick={() => removeRug(rug.id)}>Remove</Button>

                    <Button variant={'outline'} size={'lg'} disabled={updating} onClick={handleUpdateRug} className={'flex items-center gap-1'}>
                        {updating ?
                            <>
                                <Check size={20}/>
                                <p>
                                    Updated
                                </p>
                            </> :
                            "Update"}
                    </Button>
                </div>
            </AccordionContent>
        </AccordionItem>
    );
}

export default RugItem;