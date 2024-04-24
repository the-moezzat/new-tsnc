import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Label} from "@/components/ui/label";


interface SelectOptionProps {
    label?: string;
    onChange: (value: string) => void;
    options: { value: string; name: string; }[];
    placeholder?: string;
    defaultValue?: string;
}

function SelectOption({onChange, options, label, placeholder, defaultValue}: SelectOptionProps) {
    return (
        <div className={'flex flex-col gap-2'}>
            {label && <Label htmlFor={label} className={'text-base'}>{label}</Label>}
            <Select onValueChange={onChange} defaultValue={defaultValue}>
                <SelectTrigger className="w-full h-12" id={label}>
                    <SelectValue placeholder={placeholder}/>
                </SelectTrigger>
                <SelectContent>
                    {options.map(option => (
                        <SelectItem className={'h-10'} key={option.value} value={option.value}>{option.name}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}

export default SelectOption;