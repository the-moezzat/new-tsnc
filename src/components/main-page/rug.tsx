'use client'
import React from 'react';
import AddRug from "@/components/main-page/add-rug";
import Service from "@/components/main-page/service";

function Rug() {
    return (
        <Service title={'Rug Cleaning'}>
            <AddRug/>
        </Service>
    );
}

export default Rug;