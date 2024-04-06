import React from 'react';
import Image from "next/image";
import {Menu} from "lucide-react";

function Navbar() {
    return (
        <nav className={'flex justify-between gap-4 items-center px-4 py-2 bg-white shadow-lg shadow-accent'}>
            <Image src={'/logo-black.svg'} alt={'Logo'} width={150} height={40} className={'w-40'} />
            <Menu size={24} />
        </nav>
    );
}

export default Navbar;