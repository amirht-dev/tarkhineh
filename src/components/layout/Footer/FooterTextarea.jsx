import React from 'react';

const FooterTextarea = () => {
    return (
        <>
            <textarea 
                cols="30" 
                maxLength="200" 
                className='dir-rtl placeholder flex items-start h-[144px] rounded inputborder border-[1px] bg-transparent' 
                placeholder='پیام شما'/>
        </>
    );
};

export default FooterTextarea;