import React from 'react';
import ContactForm from "@/app/contact/_components/contact_form";

function Page() {
    return (
        <main className={'p-4 my-6'}>
            <h1 className="text-2xl font-bold w-full mb-4">Your Information</h1>

            <ContactForm/>
        </main>
    );
}

export default Page;