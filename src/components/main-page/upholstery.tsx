'use client'
import React from 'react';
import Service from "@/components/main-page/service";
import ServiceItem from "@/components/main-page/service-item";
import Counter from "@/components/controller/counter";

function Upholstery() {
    return (
        <Service title={'Upholstery Cleaning'}>
            <ServiceItem title={'Standard Room'} description={'Up to 200 Square Feet'}>
                <Counter title={'How Many Rooms?'} onChange={console.log} value={0} maxValue={10}/>

                <div className={'mt-2'}>
                    <h3 className={'text-lg font-semibold text-gray-800'}>AddOns</h3>
                    <div className={'space-y-2'}>
                        <Counter title={'Stairs'} onChange={console.log} value={0} maxValue={10}/>
                        <Counter title={'Hallway'} onChange={console.log} value={0} maxValue={10}/>
                        <Counter title={'Landing'} onChange={console.log}  value={0} maxValue={10}/>
                    </div>
                </div>
            </ServiceItem>
        </Service>
    );
}

export default Upholstery;