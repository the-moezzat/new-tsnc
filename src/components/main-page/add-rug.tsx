'use client'
import React from 'react';
import SelectOption from "@/components/controller/select-option";
import {Input} from "@/components/ui/input";
import Toggle from "@/components/controller/toggle";
import {Button} from "@/components/ui/button";
import ServiceItem from "@/components/main-page/service-item";
import rugData from './data/rugData.json';
import {useAppStore} from "@/stores/app-store";
import {calculateSizeInSquareFeet} from "@/util/unit-converter";

function AddRug() {
    const rugs = rugData;

    const rugsValues = Object.keys(rugs.rugs)
    const rugsOptions = rugsValues.map((rug) => {
        return {
            value: rug,
            // @ts-ignore
            name: rugs.rugs[rug].name
        }
    })

    const addOnsValues = Object.keys(rugs.addons)
    const addOnsOptions = addOnsValues.map((addOn) => {
        return {
            // @ts-ignore
            title: rugs.addons[addOn].name,
            // @ts-ignore
            description: rugs.addons[addOn].description,
            // @ts-ignore
            price: rugs.addons[addOn].price
        }
    })

    const {addRug, rugs: selectedRugs} = useAppStore(state => state);

    console.log("Rugs", selectedRugs);

    const [rugType, setRugType] = React.useState('')
    const [width, setWidth] = React.useState(0)
    const [length, setLength] = React.useState(0)
    const [unit, setUnit] = React.useState('ft')
    const [addOns, setAddOns] = React.useState<{name: string, price: number}[]>([])

    function sanitizeRugType() {
        return {
            id: Date.now(),
            // @ts-ignore
            name: rugs.rugs[rugType].name,
            // @ts-ignore
            price: rugs.rugs[rugType].price,
            width,
            length,
            unit,
            sizeInFt: calculateSizeInSquareFeet(length, width, unit).toFixed(2),
            addOns
        }
    }

    function handleAddRug() {
        // validate all fields and check if they are not empty
        if (!rugType || !width || !length || !unit) return;
        const rug = sanitizeRugType();
        addRug(rug);
    }

    return (
        <ServiceItem title={''} description={''}>

            {/* Basic info */}
            <div className={'space-y-2'}>

                <SelectOption label={'Select Rug Type'}
                              placeholder={'Choose Your Rug Type'}
                              options={rugsOptions}
                              onChange={setRugType}/>

                <div className={'grid grid-cols-3 gap-2'}>
                    <Input className={'h-12'} placeholder={"Width"} type={'number'} min={0} onChange={(e) => setWidth(+e.target.value)}/>

                    <Input className={'h-12'} placeholder={"Length"} type={'number'} min={0} onChange={(e) => setLength(+e.target.value)}/>

                    <SelectOption onChange={setUnit}
                                  placeholder={'Unit'}
                                  defaultValue={'ft'}
                                  options={[{value: 'ft', name: 'feet'}, {value: 'in', name: 'inches'},
                                      {value: 'cm', name: 'centimeters'}]}/>
                </div>
            </div>

            {/* AddOns */}
            <div className={'mt-2 space-y-2'}>
                <h3 className={'text-lg font-semibold text-gray-800'}>AddOns</h3>
                <div className={'space-y-2'}>
                    {addOnsOptions.map((addOn, index) => (
                        <Toggle key={index} title={addOn.title} description={addOn.description} onChange={() => {
                            setAddOns(addOns => {
                                const existingAddOnIndex = addOns.findIndex(a => a.name === addOn.title);

                                if (existingAddOnIndex !== -1) {
                                    addOns.splice(existingAddOnIndex, 1);
                                } else {
                                    addOns.push({name: addOn.title, price: addOn.price});
                                }

                                return [...addOns];
                            })
                        }
                        }/>
                    ))}
                </div>
            </div>

            <Button type={'button'} variant={'default'} size={'lg'} className={'mt-4'} onClick={handleAddRug}>Add</Button>
        </ServiceItem>
    );
}

export default AddRug;