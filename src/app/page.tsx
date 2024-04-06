import React from 'react';
import Navbar from "@/components/navbar";
import Steps from "@/components/steps";
import Image from "next/image";

function Page() {
    return (
        <div>
            <Navbar/>
            <Steps/>

            <section className={'flex flex-col items-center gap-8 px-4 my-12'}>
                <Image src={'/satisfaction.png'} alt={'100% guarantee'} width={150} height={150}/>
                <div className={`space-y-6`}>
                    <h3 className={`text-lg inline-block font-semibold text-secondary relative`}>
                        Satisfaction Guarantee
                        <span className={`h-0.5 bg-primary block w-8/12 absolute -bottom-1 left-0 `}/>
                    </h3>

                    <p className={`text-sm text-gray-600`}>
                        If you are not fully satisfied with your service, neither are we! It’s rare we have an unsatisfied customer but if you aren’t happy with our Toronto Carpet Cleaning Service, simply let us know within 24 hours of a service and we will happily return and re-clean the area free of charge.
                    </p>
                </div>
            </section>

            <footer className={` footer w-full flex items-center justify-center p-8 gap-8 flex-col`}>
                <Image src={'/logo-white.svg'} alt={'logo'} width={130} height={40} />
                <p className={'text-xs text-center text-white font-normal'}>
                    Toronto Steam N’ Clean was started in 1995 and, over the course of the next decade, continued to grow and thrive. Over the years, Toronto Steam N’ Clean, has become trained and certified in both carpet cleaning and water damage restoration by the Institute of Inspection, Cleaning and Restoration Certification (IICRC).
                </p>
                <Image src={'/payment-methods.png'} alt={'logo'} width={250} height={40} />

            </footer>
        </div>
    );
}

export default Page;