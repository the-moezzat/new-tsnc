import {StateCreator} from 'zustand'
import {CarpetUpholsteryState} from "@/stores/services/carpet-upholstery-slice";

export interface PriceState {
    totalPrice: number;
    priceWithoutFees: number;
    fees: number;
    discountValue: number;

    carpetUpholsteryPrice: {
        priceWithoutAddons: number;
        priceWithAddons: number;
    }

    rugPrice: {
        priceWithoutAddons: number;
        priceWithAddons: number;
    }
}

export const createPriceSlice: StateCreator<PriceState & CarpetUpholsteryState, [], [], PriceState> = () => ({
    totalPrice: 0,
    priceWithoutFees: 0,
    fees: 0,
    discountValue: 0,

    carpetUpholsteryPrice: {
        priceWithoutAddons: 0,
        priceWithAddons: 0
    },
    rugPrice: {
        priceWithoutAddons: 0,
        priceWithAddons: 0
    }
    });