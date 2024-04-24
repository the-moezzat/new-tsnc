'use client'
import React from 'react';
import Service from "@/components/main-page/service";
import ServiceItem from "@/components/main-page/service-item";
import Counter from "@/components/controller/counter";
import upholsteryData from './data/upholstery.json';
import {Accordion} from "@/components/ui/accordion";
import {UpholsteryService} from "@/types/upholstery-category";
import UpholsteryCategory from "@/components/main-page/upholstery-category";
import {useAppStore} from "@/stores/app-store";

function Upholstery() {
    const services = upholsteryData;
    const servicesKeys = Object.keys(services);

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
            addon: service.addons?.length > 0 ? service.addons?.map(addon => ({
                name: addon.name,
                price: +addon.price,
                count: 0
            })) : []
        };
    };

    const handleServiceChange = ({count, service}: { count: number, service: Service }) => {
        // find the service in the selected services
        const selectedService = selectedServices.find(s => s.name === service.name);

        if (!selectedService) {
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
        <Service title={'Upholstery Cleaning'}>

            <Accordion type={'multiple'} className={'space-y-2'}>
                {servicesKeys.map((service: string) => {
                    // @ts-ignore
                    const upholsteryCategory = services[service] as UpholsteryService;

                    return <UpholsteryCategory key={upholsteryCategory.title} title={upholsteryCategory.title}>
                        {upholsteryCategory.subcategories.map(subcategory => {
                            const selectedService = selectedServices.find(s => s.name === subcategory.name);
                            // Use the count of the service as the maxValue
                            const maxValue = selectedService ? selectedService.count : 0;

                            return <ServiceItem key={subcategory.name} title={subcategory.name}
                                                description={subcategory.description}>
                                <Counter title={'How Many?'} onChange={(count) => handleServiceChange({count, service: subcategory})} value={0} maxValue={10}/>

                                {subcategory.addons?.length > 0 && <div className={'mt-2'}>
                                    <h3 className={'text-lg font-semibold text-gray-800'}>AddOns</h3>
                                    <div className={'space-y-2'}>
                                        {subcategory.addons.map(addon => {
                                            return <Counter key={addon.name} title={addon.name}
                                                            onChange={(count) => handleAddOnChange(count, addon, subcategory)}
                                                            value={0} maxValue={maxValue}
                                                            description={addon.description}/>
                                        })}
                                    </div>
                                </div>}

                            </ServiceItem>
                        })}
                    </UpholsteryCategory>
                })}
            </Accordion>
        </Service>
    );
}

export default Upholstery;