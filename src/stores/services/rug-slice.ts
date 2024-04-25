import {StateCreator} from 'zustand'
import {CompoundType} from "@/types/compound-type";

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

    resetRug: () => void;
}

const initialState = {
    rugs: [],
}

export const createRugSlice: StateCreator<CompoundType, [], [], RugState> = (set, get) => ({
    rugs: [],
    addRug: (rug) => set((state) => {
        state.rugs.push(rug);

        get().calculateRugPrice()

        return {rugs: state.rugs};
    }),

    removeRug: (rugId) => set((state) => {
        const newRugs = state.rugs.filter(rug => rug.id !== rugId);

        state.rugs = newRugs;
        get().calculateRugPrice()
        return {rugs: newRugs};
    }),

    editRug: (rugId, rugUpdated) => set((state) => {
        const newRugs = state.rugs.map(rug => {
            if (rug.id === rugUpdated.id) {
                return rugUpdated;
            }
            return rug;
        });

        state.rugs = newRugs;
        get().calculateRugPrice()

        return {rugs: newRugs};
    }),

    resetRug: () => {
        set(initialState)
    }
})