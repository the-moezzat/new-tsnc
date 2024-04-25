import {StateCreator} from 'zustand'
import {CompoundType} from "@/types/compound-type";

export interface ContactState {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address1: string;
    address2: string;
    city: string;
    postalCode: string;
    additionalInfo: string;

    setFirstName: (firstName: string) => void;
    setLastName: (lastName: string) => void;
    setEmail: (email: string) => void;
    setPhone: (phone: string) => void;
    setAddress1: (address1: string) => void;
    setAddress2: (address2: string) => void;
    setCity: (city: string) => void;
    setPostalCode: (postalCode: string) => void;
    setAdditionalInfo: (additionalInfo: string) => void;

    resetContact: () => void;
}

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    postalCode: '',
    additionalInfo: ''

}

export const createContactSlice: StateCreator<CompoundType, [], [], ContactState> = (setState, getState) => ({
    ...initialState,

    setFirstName: (firstName) => setState({firstName}),
    setLastName: (lastName) => setState({lastName}),
    setEmail: (email) => setState({email}),
    setPhone: (phone) => setState({phone}),
    setAddress1: (address1) => setState({address1}),
    setAddress2: (address2) => setState({address2}),
    setCity: (city) => setState({city}),
    setPostalCode: (postalCode) => setState({postalCode}),
    setAdditionalInfo: (additionalInfo) => setState({additionalInfo}),

    resetContact: () => {
        setState(initialState)
    }

});