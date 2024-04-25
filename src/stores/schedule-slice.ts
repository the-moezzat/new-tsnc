import {StateCreator} from 'zustand'
import {CompoundType} from "@/types/compound-type";

export interface ScheduleState {
    availability: string;
    time: string;
    date: Date | undefined;

    setAvailability: (availability: string) => void;
    setTime: (time: string) => void;
    setDate: (date: Date | undefined) => void;

    resetSchedule: () => void;
}

const initialState = {
    availability: '',
    time: '',
    date: undefined,
}

export const createScheduleState: StateCreator<CompoundType, [], [], ScheduleState> = (setState, getState) => ({

    ...initialState,

    setAvailability: (availability) => setState({availability}),
    setTime: (time) => setState({time}),
    setDate: (date) => setState({date}),

    resetSchedule: () => {
        setState(initialState)
    }
});