import React from 'react';
import {ControllerProps} from "@/types/controllerInterface";
import Leading from "@/components/controller/leading";
import {Switch} from "@/components/ui/switch";

interface ToggleProps extends Omit<ControllerProps, 'onChange'> {
    onChange: (value: boolean) => void;
    checked?: boolean;
}

function Toggle({title, onChange, description, checked}: ToggleProps) {
    return (
        <div  className={'flex items-center justify-between gap-6'}>
            <Leading title={title} description={description}/>
            <Switch onCheckedChange={onChange} defaultChecked={checked}/>
        </div>
    );
}

export default Toggle;