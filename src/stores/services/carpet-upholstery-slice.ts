import {StateCreator} from 'zustand'
import {CompoundType} from "@/stores/_compound-type";

type ServiceType = {
    name: string;
    count: number;
    price: number,
    addon: { name: string; count: number; price: number }[]
}

export interface CarpetUpholsteryState {
    services: ServiceType[];

    addService: (service: ServiceType) => void;
}

export const createCarpetUpholsterySlice: StateCreator<CompoundType, [], [], CarpetUpholsteryState> = (set) => ({
    services: [],
    addService: (service) => set((state) => {
        // Check if the service is already in the array
        const existingServiceIndex = state.services.findIndex(s => s.name === service.name);

        console.log('zus', existingServiceIndex);

        // If the service count is greater than 1, add or update it
        if (service.count >= 1) {
            if (existingServiceIndex !== -1) {
                // Update the existing service
                state.services[existingServiceIndex] = service;
            } else {
                // Add the new service
                state.services.push(service);
            }
        } else if (service.count <= 0 && existingServiceIndex !== -1) {
            // If the service count is less than or equal to 0, remove it
            state.services.splice(existingServiceIndex, 1);
        } // handle the last case where the service isn't here


        // Return the updated state
        return {services: state.services};
    }),
})