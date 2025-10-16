import noImplemented from "@/assets/images/not-implemented.jpg";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10">
      <h3 className="text-heading-3">این صفحه درحال توسعه میباشد</h3>
      <Image src={noImplemented} alt="not implemented" className="w-[600px]" />
    </div>
  );
};

export default NotFound;
