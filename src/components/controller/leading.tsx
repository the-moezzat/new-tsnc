import React from 'react';
import MoreInfo from "@/components/more-info";

interface LeadingProps {
    title: string;
    description?: string;
}

function Leading({title, description}: LeadingProps) {
    return (
        <div className={'text-lg text-gray-700 flex items-center gap-2 justify-center'}>
            <p>
                {title}
            </p>
            {description && <MoreInfo>{description}</MoreInfo>}
        </div>
    );
}

export default Leading;