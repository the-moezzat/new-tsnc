import React, {useCallback, useEffect} from 'react';
import rugData from "@/components/main-page/data/rugData.json";
import {calculateSizeInSquareFeet} from "@/util/unit-converter";
import SelectOption from "@/components/controller/select-option";
import {Input} from "@/components/ui/input";
import Toggle from "@/components/controller/toggle";
import {RugType} from "@/types/rug-type";

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

interface RugFormProps {
    onChange: (rug: RugType) => void;
    rug?: RugType;
}

function RugForm({onChange, rug}: RugFormProps) {
    const [rugType, setRugType] = React.useState((rugsOptions.find(option => option.name === rug?.name)?.value || ''))
    const [width, setWidth] = React.useState(rug ? rug.width : 0)
    const [length, setLength] = React.useState(rug ? rug.length : 0)
    const [unit, setUnit] = React.useState(rug ? rug.unit : 'ft')
    const [addOns, setAddOns] = React.useState<{ name: string, price: number }[]>(rug ? rug.addOns : [])

    const sanitizeRugType = useCallback(() => {
            return {
                id: rug ? rug.id : Date.now(),
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
        , [addOns, length, rugType, unit, width]);

    useEffect(function () {
        if (!rugType || !width || !length || !unit) return;

        console.log(sanitizeRugType());

        onChange(sanitizeRugType());
    }, [rugType, width, length, unit, addOns, onChange, sanitizeRugType])

    return (
        <>
            {/* Basic info */}
            <div className={'space-y-2'}>

                <SelectOption label={'Select Rug Type'}
                              placeholder={'Choose Your Rug Type'}
                              options={rugsOptions}
                              onChange={setRugType}
                              defaultValue={rugType}
                />

                <div className={'grid grid-cols-3 gap-2'}>
                    <Input className={'h-12'} placeholder={"Width"} type={'number'} min={0}
                           onChange={(e) => setWidth(+e.target.value)} value={width}/>

                    <Input className={'h-12'} placeholder={"Length"} type={'number'} min={0}
                           onChange={(e) => setLength(+e.target.value)} value={length}/>

                    <SelectOption onChange={setUnit}
                                  placeholder={'Unit'}
                                  defaultValue={unit}
                                  options={[{value: 'ft', name: 'feet'}, {value: 'in', name: 'inches'},
                                      {value: 'cm', name: 'centimeters'}]}/>
                </div>
            </div>

            {/* AddOns */}
            <div className={'mt-2 space-y-2'}>
                <h3 className={'text-lg font-semibold text-gray-800'}>AddOns</h3>
                <div className={'space-y-2'}>
                    {addOnsOptions.map((addOn, index) => (
                        <Toggle key={index}
                                checked={rug?.addOns.some(addOnItem => addOnItem.name === addOn.title)}
                                title={addOn.title}
                                description={addOn.description}
                                onChange={() => {
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
        </>
    );
}

export default RugForm;