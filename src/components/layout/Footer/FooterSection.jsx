import React from 'react';
import FooterSectionHeader from './FooterHeaderSection';
import { Link } from 'react-router-dom';

const FooterSection = ({name , logos , section}) => {
    return (
        <div 
            className='flex gap-2 sm:gap-4 flex-col justify-center items-end text-white'
        >
            <FooterSectionHeader name={name}/>
            <ul className='flex items-end flex-col gap-1 sm:gap-4'>

                {
                    section.map(
                        item=>
                        <li
                            key={item}
                            className='flex text-[10px] sm:text-base'
                        >
                            {item}
                        </li>
                    )
                }
                <div className='flex'>
                {
                    logos ? 
                    logos.map(
                    item => <Link
                                className='pl-2 sm:pl-4'
                                key={item} 
                                >
                                    <img className='w-4 sm:w-auto' src={`${item}`} alt="socialmedia" />
                                </Link>
                    ) : null
                }
                </div>
            </ul>
        </div>
    );
};

export default FooterSection;