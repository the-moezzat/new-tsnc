'use client'
import React from 'react';
import DetailsCard from "@/app/review/_components/details-card";
import {useAppStore} from "@/stores/app-store";
import ConfirmButton from "@/app/review/_components/confirm-button";

function Page() {
    const {
        date,
        time,
        availability,
        totalPrice,
        fees,
        priceWithoutFees,
        address1,
        address2,
        city,
        postalCode,
        firstName,
        lastName,
        email,
        phone,
    } = useAppStore()


    return (
        <main className={'px-4 my-6 flex flex-col gap-6'}>
            <div>
                <h1 className="text-2xl font-bold w-full mb-2">Confirm & Book</h1>
                <p className={'text-gray-600'}>Make sure the following information looks correct, and then click <b>Confirm
                    Appointment</b> at the bottom:
                </p>
            </div>

            <div className={'space-y-2'}>
                <DetailsCard title={'Appointment Details'} editPath={'/appointment'}>
                    <div>
                        <div className={'flex justify-between'}>
                            <p className={'text-gray-600'}>Date:</p>
                            <p className={'text-gray-800'}>{appointmentDate()}</p>
                        </div>
                        <div className={'flex justify-between'}>
                            <p className={'text-gray-600'}>Time:</p>
                            <p className={'text-gray-800'}>{appointmentTime()}</p>
                        </div>
                    </div>
                </DetailsCard>

                <DetailsCard editPath={'/'} title={'Your Quote'}>
                    <div>
                        <div className={'flex justify-between'}>
                            <p className={'text-gray-600'}>Services:</p>
                            <p className={'text-gray-800 '}>${priceWithoutFees.toFixed(2)}</p>
                        </div>
                        <div className={'flex justify-between'}>
                            <p className={'text-gray-600'}>HST (13%):</p>
                            <p className={'text-gray-800'}>${fees.toFixed(2)}</p>
                        </div>
                        <div className={'flex justify-between'}>
                            <p className={'text-gray-600'}>Total Price:</p>
                            <p className={'text-primary text-xl font-bold'}>${totalPrice.toFixed(2)}</p>
                        </div>
                    </div>
                </DetailsCard>

                <DetailsCard editPath={'/contact'} title={'Address'}>
                    <div>
                        <p className={'text-gray-800'}>{address1}</p>
                        <p className={'text-gray-800'}>{address2}</p>
                        <p className={'text-gray-800'}>{city} {postalCode}</p>
                    </div>
                </DetailsCard>

                <DetailsCard editPath={'/contact'} title={'Your Information'}>
                    <div>
                        <div className={'flex justify-between'}>
                            <p className={'text-gray-600'}>Name:</p>
                            <p className={'text-gray-800'}>{firstName} {lastName}</p>
                        </div>
                        <div className={'flex justify-between'}>
                            <p className={'text-gray-600'}>Email:</p>
                            <p className={'text-gray-800'}>
                                <a href={`mailto:${email}`} className={'text-primary'}>{email}</a>
                            </p>
                        </div>
                        <div>
                            <div className={'flex justify-between'}>
                                <p className={'text-gray-600'}>Phone:</p>
                                <p className={'text-gray-800'}>{phone}</p>
                            </div>
                        </div>
                    </div>
                </DetailsCard>

            </div>

            <ConfirmButton/>
        </main>
    );

    function appointmentDate() {
        if (availability === 'asap') {
            return 'As Soon As Possible'
        }
        if (availability === 'flexible') {
            return 'Flexible Data'
        }

        return date?.toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})

    }

    function appointmentTime() {
        if (availability === 'asap') {
            return 'As Soon As Possible'
        }
        if (availability === 'flexible') {
            return 'Flexible Data'
        }

        return time;
    }
}

export default Page;