'use client'
import React from 'react';
import {Calendar} from "@/components/ui/calendar";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {Check} from "lucide-react";
import classNames from "classnames";
import {Separator} from "@/components/ui/separator";
import {useAppStore} from "@/stores/app-store";

const today = new Date();
const tomorrow = new Date(today.setDate(today.getDate() + 1));

function Page() {
    const {time, availability, date, setAvailability, setTime, setDate} = useAppStore()

    return (
        <main className={'flex items-center justify-center flex-col gap-6 my-6 mb-20 px-4'}>
            <h1 className="text-2xl font-bold w-full">Select a schedule</h1>


            <RadioGroup defaultValue={availability} onValueChange={(value) => {
                setTime('')
                setDate(undefined)
                setAvailability(value)
            }} className={'grid grid-rows-2 gap-2 w-full'}>
                <div className="">
                    <RadioGroupItem value="asap" id="option-one" hidden />
                    <Label htmlFor="option-one" className={classNames('cursor-pointer border-2 rounded-md px-3 py-3 text-base font-semibold flex items-center gap-2',
                        {
                            'border-primary': availability === "asap"
                        })}>
                        {availability === "asap" && <div
                            className={'w-6 h-6 shrink-0 bg-primary flex items-center justify-center text-white rounded-full'}>
                            <Check size={16}/>
                        </div>}
                        As Soon As possible
                    </Label>
                </div>
                <div className=" w-full">
                    <RadioGroupItem value="flexible" id="option-two" hidden />

                    <Label htmlFor="option-two" className={classNames('cursor-pointer border-2 rounded-md px-3 py-3 text-base font-semibold flex items-center gap-2', {
                        'border-primary': availability === "flexible"
                    })}>
                        {availability === "flexible" && <div
                            className={'w-6 h-6 shrink-0 bg-primary flex items-center justify-center text-white rounded-full'}>
                            <Check size={16}/>
                        </div>}
                        I&apos;m Flexible
                    </Label>
                </div>
            </RadioGroup>

<div className={'grid grid-cols-[1fr,auto,1fr] gap-4 w-full items-center'}>
    <Separator/>
    <span className={'text-center text-gray-500 font-semibold'}>Or Choose Specific Date and Time</span>
    <Separator/>
</div>

            <div className={'flex items-center justify-between gap-4'}>
                {/*<h2>Choose Date</h2>*/}
                <Calendar
                    fromDate={tomorrow}
                    mode="single"
                    selected={date}
                    onSelect={(date) => {
                        setAvailability('')
                        setDate(date)
                    }}
                    className="rounded-md border w-fit"

                />

                <div className={'space-y-4'}>
                    <h2 className={'h-base font-bold'}>
                        Time
                    </h2>

                    <RadioGroup defaultValue={availability} onValueChange={(time) => {
                        setAvailability('')
                        setTime(time)
                    }}
                                className={'grid grid-rows-2 gap-2 w-full'}>
                        <div className=" w-full">
                            <RadioGroupItem value="9AM - 12PM" id="9AM - 12PM" hidden/>

                            <Label htmlFor="9AM - 12PM"
                                   className={classNames('cursor-pointer border-2 rounded-md px-3 py-3 text-base font-semibold flex items-center gap-2', {
                                       'border-primary': time === "9AM - 12PM"
                                   })}>
                                {time === "9AM - 12PM" && <div
                                    className={'w-6 h-6 shrink-0 bg-primary flex items-center justify-center text-white rounded-full'}>
                                    <Check size={16}/>
                                </div>}
                                9AM - 12PM
                            </Label>
                        </div>

                        <div className=" w-full">
                            <RadioGroupItem value="12PM - 3PM" id="12PM - 3PM" hidden/>

                            <Label htmlFor="12PM - 3PM"
                                   className={classNames('cursor-pointer border-2 rounded-md px-3 py-3 text-base font-semibold flex items-center gap-2', {
                                       'border-primary': time === "12PM - 3PM"
                                   })}>
                                {time === "12PM - 3PM" && <div
                                    className={'w-6 h-6 shrink-0 bg-primary flex items-center justify-center text-white rounded-full'}>
                                    <Check size={16}/>
                                </div>}
                                12PM - 3PM
                            </Label>
                        </div>

                        <div className=" w-full">
                            <RadioGroupItem value="3PM - 6PM" id="3PM - 6PM" hidden/>

                            <Label htmlFor="3PM - 6PM"
                                   className={classNames('cursor-pointer border-2 rounded-md px-3 py-3 text-base font-semibold flex items-center gap-2', {
                                       'border-primary': time === "3PM - 6PM"
                                   })}>
                                {time === "3PM - 6PM" && <div
                                    className={'w-6 h-6 shrink-0 bg-primary flex items-center justify-center text-white rounded-full'}>
                                    <Check size={16}/>
                                </div>}
                                3PM - 6PM
                            </Label>
                        </div>
                    </RadioGroup>

                </div>
            </div>

        </main>

    )
}

export default Page;