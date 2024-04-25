import React from 'react';
import {useAppStore} from "@/stores/app-store";
import {Separator} from "@/components/ui/separator";

function Summary() {


    const {totalPrice, fees, priceWithoutFees} = useAppStore()
    return (
        <div>
            <h2 className="mb-2 text-xl  font-bold text-gray-700">
                Summary
            </h2>

            <div className="mb-1 flex items-center justify-between">
                <p className={'text-base text-[#495057] font-medium'}>Services</p>
                <p className={'text-base text-[#495057] font-semibold'}>${priceWithoutFees.toFixed(2)}</p>
            </div>

            {/*{promoCode && (*/}
            {/*    <div className="mb-1 flex items-center justify-between">*/}
            {/*        <PriceTag>*/}
            {/*            {promoCode.value_type === "Percentage"*/}
            {/*                ? `${promoCode.value}% `*/}
            {/*                : `$${promoCode.value}`}{" "}*/}
            {/*            Discount*/}
            {/*        </PriceTag>*/}
            {/*        <Price>*/}
            {/*            -${(totalPriceBeforeDiscount - totalPriceAfterDiscount).toFixed(2)}*/}
            {/*        </Price>*/}
            {/*    </div>*/}
            {/*)}*/}

            <div className="mb-2 flex items-center justify-between">
                <p className={'text-base text-[#495057] font-medium'}>HST(13%)</p>
                <p className={'text-base text-[#495057] font-semibold'}>${fees.toFixed(2)}</p>
            </div>

            <Separator className={'border-dashed'}/>

            <div
                className="flex items-center justify-between font-heading text-lg font-bold text-primary mt-2">
                <p className="text-lg font-semibold">Total Price</p>
                <p className="text-xl font-semibold">${totalPrice.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default Summary;