import {StateCreator} from 'zustand'
import {CompoundType} from "@/types/compound-type";

export interface SharedState {
}

export const createSharedSlice: StateCreator<CompoundType, [], [], SharedState> = (setState, getState) => ({

});