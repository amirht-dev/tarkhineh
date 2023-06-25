import React from 'react';

//components
import FooterSection from './FooterSection';
import FooterInputs from './FooterInputsSection';

//image
import footerBg from "/public/assets/img/Footer.svg"

const Footer = () => {
    return (
        <div
            className="
                        flex 
                        bg-[url('public/assets/img/MobileFooter.svg')]
                        sm:bg-[url('public/assets/img/Footer.svg')] 
                        bg-no-repeat bg-cover bg-center
                        flex-row-reverse justify-around 
                        h-[152px] sm:h-[319px]"
            >
            <FooterSection
                name="دسترسی آسان"
                section={["پرسش‌های متداول" ,"قوانین ترخینه" , "حریم خصوصی"]}
                logos={["/public/assets/img/icons/twitter.svg" , "/public/assets/img/icons/telegram.svg" , "/public/assets/img/icons/instagram.svg"]}
                />
            <FooterSection 
                name="شعبه های ترخینه"
                section={["شعبه اکباتان" , "شعبه چالوس" , "شعبه اقدسیه" , "شعبه ونک"]}
                />
        
            <FooterInputs />            
        </div>
    );
};

export default Footer;