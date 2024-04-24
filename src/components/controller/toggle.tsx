import React from 'react';
import {ControllerProps} from "@/components/controller/_controllerInterface";
import Leading from "@/components/controller/leading";
import {Switch} from "@/components/ui/switch";

interface ToggleProps extends Omit<ControllerProps, 'onChange'> {
    onChange: (value: boolean) => void;
}

function Toggle({title, onChange, description}: ToggleProps) {
    return (
        <div  className={'flex items-center justify-between gap-6'}>
            <Leading title={title} description={description}/>
            <Switch onCheckedChange={onChange}/>
        </div>
    );
}

export default Toggle;