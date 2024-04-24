'use client'
import React from 'react';
import ServiceItem from "@/components/main-page/service-item";
import Counter from "@/components/controller/counter";
import Service from "@/components/main-page/service";
import carpetData from './data/carpetData.json';
import {useAppStore} from "@/stores/app-store";

function Carpet() {
    const services = carpetData;

    type Service = {
        id: number,
        name: string,
        description: string,
        price: number,
        addons: { name: string, price: number, description: string }[]
    }

    const {addService, services: selectedServices} = useAppStore(state => state);

    console.log(selectedServices);
    // create a function that take a row data object and create a new service
    const createService = (service: Service) => {
        return {
            name: service.name,
            price: service.price,
            count: 1,
            addon: service.addons.map(addon => ({
                name: addon.name,
                price: +addon.price,
                count: 0
            }))
        };
    };

    const handleServiceChange = ({count, service}: { count: number, service: Service }) => {
        // find the service in the selected services
        const selectedService = selectedServices.find(s => s.name === service.name);

        if (!selectedService) {
            console.log('selectedService', selectedService);
            console.log(createService(service));
            addService(createService(service));
            return;
        }

        const updatedService = {...selectedService, count};
        addService(updatedService);
    };

    const handleAddOnChange = (count: number, addOn: any, service: Service) => {
        // find the service in the selected services
        const selectedService = selectedServices.find(s => s.name === service.name);

        if (!selectedService) {
            addService(createService(service));
            return;
        }

        // find the add-on in the selected service
        const selectedAddOn = selectedService.addon.find(a => a.name === addOn.name);

        if (!selectedAddOn) {
            // if the add-on doesn't exist in the selected service, add it
            selectedService.addon.push({ ...addOn, count });
        } else {
            // if the add-on exists in the selected service, update its count
            selectedAddOn.count = count;
        }

        addService(selectedService);
    };

    return (
        <Service title={'Carpet Cleaning'}>
            {services.map((service, index) => {
                const selectedService = selectedServices.find(s => s.name === service.name);
                // Use the count of the service as the maxValue
                const maxValue = selectedService ? selectedService.count : 0;

               return (
                    <ServiceItem key={index} title={service.name} description={service.description}>
                        <Counter title={'How Many Rooms?'} onChange={(count) => handleServiceChange({count, service})}
                                 value={0} maxValue={15}/>

                        <div className={'mt-2'}>
                            <h3 className={'text-lg font-semibold text-gray-800'}>AddOns</h3>
                            <div className={'space-y-2'}>
                                {service.addons.map((addOn, index) => (
                                    <Counter key={index} title={addOn.name} description={addOn.description}
                                             onChange={(count) => handleAddOnChange(count, addOn, service)} value={0}
                                             maxValue={maxValue}/>
                                ))}
                            </div>
                        </div>
                    </ServiceItem>
                )
            })}
        </Service>
    );
}

export default Carpet;