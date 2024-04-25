'use client'
import React from 'react';

import {useAppStore} from "@/stores/app-store";
import {Button} from "@/components/ui/button";
import {useMutation} from "@tanstack/react-query";
import {useRouter} from "next/navigation";

interface EmailProps {
    fullName: string;
    email: string;
    phone: string;
    address1: string;
    address2: string;
    city: string;
    postalCode: string;
    date: string;
    time: string;
    services: {
        name: string;
        price: number;
        count: number;
        addon: {
            name: string;
            price: number;
            count: number;
        }[];
    }[];
    rugs: {
        name: string;
        length: number;
        width: number;
        unit: string;
        sizeInFt: string;
        price: number;
        addOns: {
            name: string;
            price: number;
        }[];
    }[];
    additionalInfo: string;
    priceDetails: {
        totalPrice: number;
        fees: number;
        priceWithoutFees: number;
        carpetUpholsteryPrices: {
            totalPrice: number;
            priceWithoutAddons: number;
            addonsPrice: number
        };
        rugPrice: {
            totalPrice: number;
            priceWithoutAddons: number;
            addonsPrice: number
        }
    }
}

function ConfirmButton() {

    const router = useRouter()
    const state = useAppStore()
    const {mutate, isPending} = useMutation({
        mutationFn: submitAppointment,
        onSuccess: () => {
            window.location.href = "https://torontosteamnclean.ca/thank-you";
            console.log('success');
        }
    })

    function makeDataForEmail(): EmailProps {
        return {
            fullName: `${state.firstName} ${state.lastName}`,
            email: state.email,
            phone: state.phone,
            address1: state.address1,
            address2: state.address2,
            city: state.city,
            postalCode: state.postalCode,
            date: appointmentDate()!,
            time: appointmentTime(),
            services: state.services,
            rugs: state.rugs,
            additionalInfo: state.additionalInfo,
            priceDetails: {
                totalPrice: state.totalPrice,
                fees: state.fees,
                priceWithoutFees: state.priceWithoutFees,
                carpetUpholsteryPrices: {
                    totalPrice: state.carpetUpholsteryPrice.totalPrice,
                    priceWithoutAddons: state.carpetUpholsteryPrice.priceWithoutAddons,
                    addonsPrice: state.carpetUpholsteryPrice.addonsPrice
                },
                rugPrice: {
                    totalPrice: state.rugPrice.totalPrice,
                    priceWithoutAddons: state.rugPrice.priceWithoutAddons,
                    addonsPrice: state.rugPrice.addonsPrice
                }
            }
        }
    }

    return (
        <Button size={'lg'} onClick={() => mutate()} disabled={isPending}>
            {isPending ? "Confirming" : "Confirm Appointment"}
        </Button>
    );

    async function submitAppointment() {
        const response = await fetch('/api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(makeDataForEmail())
        })
        return await response.json()
    }

    function appointmentDate() {
        if (state.availability === 'asap') {
            return 'As Soon As Possible'
        }
        if (state.availability === 'flexible') {
            return 'Flexible Data'
        }

        return state.date?.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })

    }

    function appointmentTime() {
        if (state.availability === 'asap') {
            return 'As Soon As Possible'
        }
        if (state.availability === 'flexible') {
            return 'Flexible Data'
        }

        return state.time;
    }
}

export default ConfirmButton;