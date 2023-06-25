import React from 'react';
import FooterInput from './FooterInput';
import FooterTextarea from './FooterTextarea';

const FooterInputsSection = () => {
    return (
        <div 
            className='relative flex gap-[16px] flex-col justify-center fontEstedad text-white'>
                <h5 
                    className='hidden sm:flex flex-row-reverse text-xl font-bold'
                    >
                    پیام به ترخینه
                </h5>
                <div 
                    className='hidden sm:flex flex-row-reverse'
                    >
                    <div className='flex flex-col ml-[26px]'>
                        <FooterInput 
                            placeholder="نام و نام خانوادگی"/>
                        <FooterInput 
                            placeholder='شماره تماس'/>
                        <FooterInput 
                            placeholder='ایمیل (اختیاری)'/>
                    </div>
                    <FooterTextarea />   
                </div>
                <button className='absolute hidden sm:flex justify-center top-[80%] right-[62%] border w-[183px] rounded inputborder p-[8px_0px]' >
                    ارسال پیام
                    </button>
            </div>
    );
}

export default FooterInputsSection;