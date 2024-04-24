import {create} from "zustand";
import {createPriceSlice, PriceState} from "@/stores/price-slice";
import {CarpetUpholsteryState, createCarpetUpholsterySlice} from "@/stores/services/carpet-upholstery-slice";
import {createRugSlice, RugState} from "@/stores/services/rug-slice";
import {CompoundType} from "@/types/compound-type";

export const useAppStore = create<CompoundType>()((...a) => ({
    ...createPriceSlice(...a),
    ...createCarpetUpholsterySlice(...a),
    ...createRugSlice(...a)
}))