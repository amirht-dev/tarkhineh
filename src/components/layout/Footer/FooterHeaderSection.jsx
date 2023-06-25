import React from 'react';

const FooterSectionHeader = ({name}) => {
    return (
        <h3
            className='sm:font-bold sm:text-xl text-xs'
        >{name}
        </h3>
    );
};

export default FooterSectionHeader;