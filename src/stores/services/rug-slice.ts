import {StateCreator} from 'zustand'
import {CompoundType} from "@/types/compound-type";
import addRug from "@/components/main-page/rug/add-rug";

type Rug = {
    id: number;
    name: string;
    width: number;
    length: number;
    unit: string;
    sizeInFt: string;
    price: number;
    addOns: { name: string; price: number }[]
}

export interface RugState {
    rugs: Rug[];

    addRug: (rug: Rug )=> void;

    removeRug: (rugId: number) => void;

    editRug: (rugId: number, rug: Rug) => void;
}

export const createRugSlice: StateCreator<CompoundType, [], [], RugState> = (set) => ({
    rugs: [],
    addRug: (rug) => set((state) => {
        state.rugs.push(rug);
        return {rugs: state.rugs};
    }),

    removeRug: (rugId) => set((state) => {
        const newRugs = state.rugs.filter(rug => rug.id !== rugId);
        return {rugs: newRugs};
    }),

    editRug: (rugId, rugUpdated) => set((state) => {
        console.log(rugUpdated);
        const newRugs = state.rugs.map(rug => {
            if (rug.id === rugId) {
                return rugUpdated;
            }
            return rug;
        });
        return {rugs: newRugs};
    }),


})