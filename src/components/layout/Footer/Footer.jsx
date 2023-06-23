import React from 'react';
import FooterSection from './FooterSection';
import FooterInput from './FooterInput';

const Footer = () => {
    return (
        <div>
            <div>
                <FooterSection
                    name="دسترسی آسان"
                    section={["پرسش‌های متداول" ,"قوانین ترخینه" , "حریم خصوصی"]}
                    logos={[]}
                    />
            </div>
            <div>
                <FooterSection 
                    name="شعبه های ترخینه"
                    section={["شعبه اکباتان" , "شعبه چالوس" , "شعبه اقدسیه" , "شعبه ونک"]}
                    />
            </div>
            <div>
                <FooterInput />
            </div>
        </div>
    );
};

export default Footer;