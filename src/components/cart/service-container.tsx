import React from 'react';

interface ServiceContainerProps {
    title: string;
    children?: React.ReactNode;
}

function ServiceContainer({title, children}: ServiceContainerProps) {
    return (
        <div className={'border rounded-sm p-2 space-y-3 bg-white'}>
            <h3 className={'font-semibold text-lg text-gray-600'}>{title}</h3>
            <div className={'pl-2 border-l-2 space-y-2'}>
                {children}
            </div>
        </div>
    );
}

export default ServiceContainer;