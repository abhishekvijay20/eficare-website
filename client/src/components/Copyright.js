import React from 'react';

const Copyright = () => {
    const currentYear = new Date().getFullYear(); // Get the current year dynamically

    return (
        <div className="self-stretch bg-whitesmoke overflow-hidden flex flex-row py-5 px-20 items-start justify-start text-center text-mini">
            <div className="flex-1 relative sm:text-[12px]">
                Copyright © {currentYear} Eficare Consultancy. All rights reserved.
            </div>
        </div>
    );
};

export default Copyright;
