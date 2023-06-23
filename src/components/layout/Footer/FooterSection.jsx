import React from 'react';
import FooterSectionHeader from './FooterSectionHeader';

const FooterSection = ({name , logo , section}) => {
    return (
        <div>
            <FooterSectionHeader name={name}/>
            {
                section.map(
                    item=>
                    <span>{item}</span>
                )
            }
            {
                // !logo ? 
                // logo.map(
                // item => <img src={item} alt='socialmedia'/>
                // ) : null
            }
        </div>
    );
};

export default FooterSection;