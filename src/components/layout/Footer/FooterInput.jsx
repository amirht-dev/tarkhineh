import React from 'react';

const FooterInput = ({placeholder}) => {
    return (
        <input 
            className='placeholder dir-rtl inputStyles inputborder' 
            placeholder={placeholder}/>
    );
};

export default FooterInput;