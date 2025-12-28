import { User_Outline } from "@/components/atoms/icons/Users/User";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <div>
      <div className="relative flex h-[176px] items-center justify-center lg:h-[336px]">
        <Image
          fill
          src="https://placehold.net/800x600.png"
          alt=""
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[black] opacity-55"></div>
        <p className="text-heading-6 text-primary-tint-1 lg:text-heading-2 relative text-center">
          درباره ترخینه بیشتر بدانید!
        </p>
      </div>

      <section className="container mt-6 lg:mt-12">
        <h4 className="text-heading-6 text-neutral-gray-8 lg:text-heading-4">
          درباره ما
        </h4>

        <div className="mt-3 lg:mt-6 lg:flex lg:gap-6">
          <div className="relative float-end aspect-152/120 w-[152px] shrink-0 lg:order-last lg:w-[600px]">
            <Image
              src="https://placehold.net/800x600.png"
              alt=""
              fill
              className="rounded-sm object-cover object-center lg:rounded-lg"
            />
          </div>
          <p className="text-caption-sm lg:text-body-xl text-neutral-gray-7 font-normal">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
      </section>

      <section className="bg-neutral-gray-3 mt-6 py-3 lg:mt-12 lg:py-12">
        <div className="lg:divide-neutral-gray-4 container grid grid-cols-4 gap-4 lg:divide-x">
          <Feature />
          <Feature />
          <Feature />
          <Feature />
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;

function Feature() {
  return (
    <div className="flex flex-col items-center lg:gap-4">
      <User_Outline className="text-neutral-gray-8 size-4 lg:size-12" />
      <span className="text-caption-sm text-neutral-gray-7 lg:text-body-lg text-center font-normal">
        پرسنلی مجرب و حرفه‌ای
      </span>
    </div>
  );
}
