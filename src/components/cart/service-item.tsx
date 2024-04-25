import React from 'react';

interface ServiceItemProps {
    title: string;
    price: number;
    onDelete?: () => void;
}

function ServiceItem({title, price, onDelete}: ServiceItemProps) {
    return (
        <div className={'border rounded-sm p-2 flex items-center justify-between'}>
            <p className={'text-base text-gray-700 font-medium'}>{title}</p>
            <p className={'text-primary font-semibold'}>${price.toFixed(2)}</p>
        </div>
    );
}

export default ServiceItem;