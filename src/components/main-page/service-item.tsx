import React from 'react';

interface ServiceItemProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

function ServiceItem({title, description, children}: ServiceItemProps) {
    return (
        <div className={'flex flex-col gap-4 bg-[#F3F3F3] p-2 rounded-sm'}>
            <div className={'flex flex-col items-center gap-1 text-center'}>
                <h2 className={'text-xl font-semibold text-gray-800'}>{title}</h2>
                <p className={'text-gray-600 text-base'}>{description}</p>
            </div>

            <div>
                {children}
            </div>
        </div>
    );
}

export default ServiceItem;