import React from 'react';

interface CardProps {
    title: string;
    value: number;
}

const Card: React.FC<CardProps> = ({ title, value }) => {
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                    <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {/* Your icon SVG */}
                        </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                        <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
                        <dd className="flex items-baseline">
                            <div className="text-2xl font-semibold text-gray-900">{value}</div>
                        </dd>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
