import React from 'react';
import {useAppStore} from "@/stores/app-store";
import {Button} from "@/components/ui/button";
import ServiceContainer from "@/components/cart/service-container";
import ServiceItem from "@/components/cart/service-item";

function Cart() {

    const {services, rugs, resetRug, resetContact, resetSchedule, resetPrice, resetCarpetUpholstery} = useAppStore()

    return (
        <div className="flex flex-col gap-2">
            {services.length > 0 && <ServiceContainer title={"Carpet & Upholstery Cleaning"}>
                {services.map((service, index) => (
                    <>
                        <ServiceItem key={service.name} title={`${service.count} x ${service.name}`} price={service.price * service.count}/>
                        {
                            service.addon.filter(addon =>
                                addon.count > 0
                            ).map(addon => (
                                <ServiceItem key={addon.name} title={`${addon.count} x ${addon.name} for ${service.name}`} price={addon.price * addon.count}/>
                            ))
                        }
                    </>
                ))}
            </ServiceContainer>}

            {rugs.length > 0 && <ServiceContainer title={"Rugs"}>
                {rugs.map((rug, index) => (
                    <>
                        <ServiceItem key={rug.name} title={`${rug.name} Rug (${rug.width}*${rug.length}${rug.unit})`} price={rug.price * +rug.sizeInFt}/>
                        {
                            rug.addOns.map(addon => (
                                <ServiceItem key={addon.name} title={`${addon.name} for ${rug.name} Rug`} price={addon.price * +rug.sizeInFt}/>
                            ))
                        }
                    </>
                ))}
            </ServiceContainer>}
            {(rugs.length > 0 || services.length > 0) && (
                <Button
                    variant={"link"}
                    className="ml-auto mt-auto h-fit w-fit p-0 text-end text-sm underline"
                    onClick={() => {
                        resetPrice()
                        resetRug()
                        resetContact()
                        resetSchedule()
                        resetCarpetUpholstery()
                    }}
                >
                    Clear All
                </Button>
            )}
        </div>
    )
}

export default Cart;