'use client'
import React from 'react';
import Leading from "@/components/controller/leading";
import {ControllerProps} from "@/components/controller/_controllerInterface";

interface CounterProps extends Omit<ControllerProps, 'onChange'> {
    onChange: (value: number) => void;
    value: number;
    maxValue: number;
}

function Counter({title, onChange, description, maxValue,  value = 0}: CounterProps) {
    const [counter, setCounter] = React.useState(value);

    function increaseValue() {
        if (counter === maxValue) return;
        setCounter(value => value + 1);
        onChange(counter + 1);
    }

    function decreaseValue() {
        if (counter === 0) return;
        setCounter(value => value - 1);
        onChange(counter - 1);
    }

    return (
        <div className={'flex items-center justify-between gap-6'}>
            <Leading title={title} description={description}/>

            <div className={'flex items-center gap-3 p-1 bg-white rounded-sm'}>
                <button onClick={decreaseValue}
                        className={'w-8 h-8 rounded-sm bg-primary text-primary-foreground text-2xl'}>-
                </button>
                <p className={'text-lg text-gray-800'}>{counter}</p>
                <button onClick={increaseValue}
                        className={'w-8 h-8 rounded-sm bg-primary text-primary-foreground flex items-center justify-center text-2xl'}>+
                </button>
            </div>
        </div>
    );
}

export default Counter;