'use client'
import {ChevronRight} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useAppStore} from "@/stores/app-store";
import PriceSheet from "@/components/floating-dock/price-sheet";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {useEffect, useState} from "react";

function FloatingDock() {
    const pathname = usePathname().split('/')[1]
    const router =  useRouter()
    const {
        availability, totalPrice, time, services, rugs, date,
        firstName, lastName, email, phone, address1, address2, city, postalCode, additionalInfo
    } = useAppStore()
    const [isActiveLink, setIsActiveLink] = useState(false)

    const nextStep: {
        [key: string]: {
            title: string,
            link: string
        }
    } = {
        '': {
            title: 'Next (Scheduling)',
            link:
                '/appointment'
        },
        'appointment': {
            title: 'Next (Contact)',
            link: '/contact'
        },
        'contact': {
            title: 'Next (Review)',
            link: '/review'
        },
        'review': {
            title: 'Next (Payment)',
            link: ''
        },

    }


    useEffect(() => {
        console.log(pathname)

        if (pathname === 'appointment') {

            if (!(services.length || rugs.length))
                router.push('/')

            if ((availability === 'asap' || availability === 'flexible') && !time)
                setIsActiveLink(true)
            else if (time && date)
                setIsActiveLink(true)
            else
                setIsActiveLink(false)

        }

        if (pathname === "") {
            if (services.length > 0 || rugs.length > 0)
                setIsActiveLink(true)
            else
                setIsActiveLink(false)
        }

        if (pathname === "contact") {

            if (!(services.length || rugs.length))
                router.push('/')

            if (firstName && lastName && email && phone && address1 && city && postalCode && address2)
                setIsActiveLink(true)
            else
                setIsActiveLink(false)
        }

        if(pathname === "review") {
            if (!(services.length || rugs.length))
                router.push('/')
        }
    }, [address1, address2, availability, city, date, email, firstName, lastName, pathname, phone, postalCode, rugs.length, services.length, time])

    return (
        <nav
            className={'flex justify-between gap-4 items-center px-4 py-2 bg-white shadow-2xl fixed bottom-0 left-0 w-full z-50'}>

            <PriceSheet/>

            {pathname !== 'review' && <Button disabled={!isActiveLink} size={'lg'} variant={'default'} asChild={isActiveLink}>
                <Link onClick={() => {
                    console.log('next')
                    setIsActiveLink(false)
                }} href={nextStep[pathname].link} className={'flex gap-2 items-center'}>
                    {nextStep[pathname].title}
                    <ChevronRight/>
                </Link>
            </Button>}
        </nav>
    );
}

export default FloatingDock;