import {StateCreator} from 'zustand'
import {CompoundType} from "@/types/compound-type";

export interface PriceState {
    totalPrice: number;
    priceWithoutFees: number;
    fees: number;
    discountValue: number;

    carpetUpholsteryPrice: {
        priceWithoutAddons: number;
        priceWithAddons: number;
        addonsPrice: number;
        totalPrice: number;
    }

    rugPrice: {
        priceWithoutAddons: number;
        priceWithAddons: number;
        addonsPrice: number;
        totalPrice: number;
    }

    calculatePrice: () => void;
    calculateCarpetUpholsteryPrice: () => void;
    calculateRugPrice: () => void;
    resetPrice: () => void;
}

const initialState = {totalPrice: 0,
    priceWithoutFees: 0,
    fees: 0,
    discountValue: 0,

    carpetUpholsteryPrice: {
        priceWithoutAddons: 0,
        priceWithAddons: 0,
        addonsPrice: 0,
        totalPrice: 0
    },
    rugPrice: {
        priceWithoutAddons: 0,
        priceWithAddons: 0,
        addonsPrice: 0,
        totalPrice: 0
    },}

export const createPriceSlice: StateCreator<CompoundType, [], [], PriceState> = (setState, getState) => ({
    ...initialState,
    resetPrice: () => {
        setState(initialState)
    },
    calculatePrice: () => {
        const {carpetUpholsteryPrice, rugPrice} = getState();

        setState((state) => {
            let carpetUpholsteryTotalPrice = 0;
            if (carpetUpholsteryPrice.priceWithoutAddons <= 150 && carpetUpholsteryPrice.priceWithoutAddons > 0)
                carpetUpholsteryTotalPrice = 199 + carpetUpholsteryPrice.addonsPrice;
            else if (carpetUpholsteryPrice.priceWithoutAddons > 150)
                carpetUpholsteryTotalPrice = carpetUpholsteryPrice.priceWithoutAddons - 150 + 199 + carpetUpholsteryPrice.addonsPrice;


            let rugTotalPrice = 0;
            if (rugPrice.priceWithoutAddons <= 169 && rugPrice.priceWithoutAddons > 0)
                rugTotalPrice = 169 + rugPrice.addonsPrice;
            else if (rugPrice.priceWithoutAddons > 169)
                rugTotalPrice = rugPrice.priceWithoutAddons + rugPrice.addonsPrice;


            state.totalPrice = carpetUpholsteryTotalPrice + rugTotalPrice;

            state.carpetUpholsteryPrice.totalPrice = carpetUpholsteryTotalPrice;
            state.rugPrice.totalPrice = rugTotalPrice;
            state.priceWithoutFees = state.totalPrice;
            state.fees = state.totalPrice * 0.13;

            state.totalPrice = state.priceWithoutFees + state.fees;

            return state;
        });
    },
    calculateCarpetUpholsteryPrice: () => {
        const services = getState().services;

        const priceWithoutAddons = services.reduce((acc, service) => {
            return acc + service.price * service.count
        }, 0)

        const addonsPrice = services.reduce((acc, service) => {
            return service.addon.reduce((acc, addon) => {
                return acc + addon.price * addon.count
            }, 0)
        }, 0)

        setState((state) => {

            state.carpetUpholsteryPrice.priceWithAddons = priceWithoutAddons + addonsPrice

            state.carpetUpholsteryPrice.priceWithoutAddons = priceWithoutAddons

            state.carpetUpholsteryPrice.addonsPrice = addonsPrice

            return state;
        });

        getState().calculatePrice()
    },
    calculateRugPrice: () => {
        const rugs = getState().rugs;

        const priceWithoutAddons = rugs.reduce((acc, rug) => {
            return acc + rug.price * +rug.sizeInFt
        }, 0)

        const addonsPrice = rugs.reduce((acc, rug) => {
            return rug.addOns.reduce((acc, addon) => {
                return acc + addon.price * +rug.sizeInFt
            }, 0)
        }, 0)

        setState((state) => {

            state.rugPrice.priceWithAddons = priceWithoutAddons + addonsPrice

            state.rugPrice.priceWithoutAddons = priceWithoutAddons

            state.rugPrice.addonsPrice = addonsPrice

            return state;
        });

        getState().calculatePrice()
    }
});