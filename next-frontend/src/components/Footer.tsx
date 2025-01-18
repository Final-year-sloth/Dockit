import Link from "next/link";
import { BiMessageDetail } from "react-icons/bi";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="container mx-auto px-4">
        <Link href="/home" className="font-black ">
          Medigeek
        </Link>
        {/* <h4 className="font-semibold text-[40px] py-6">Contact</h4> */}

        <div className="flex flex-wrap gap-16 items-center justify-between">
          <div className="flex-1">
            <p>123 Road</p>
            <div className="items-center flex py-4">
              <BsFillSendFill />
              <p className="ml-4">Medigeek HQ</p>
            </div>
            <div className="items-center flex py-4">
              <BsTelephoneOutbound />
              <p className="ml-4">033-900-888</p>
            </div>
            <div className="items-center flex py-4">
              <BiMessageDetail />
              <p className="ml-4">Help Center</p>
            </div>
          </div>
          <div className="flex-1 md:text-right">
            <p className="pb-4">Our Story</p>
            <p className="pb-4">Get in Touch</p>
            <p className="pb-4">Terms of Service</p>
            <p className="pb-4">Privacy Commitment</p>
            <p>Customer Assistant</p>
          </div>
          <div className="flex-1 md:text-right">
            <p className="pb-4">Experience</p>
            <p className="pb-4">Rate us</p>
            <p className="pb-4">Feedback</p>
            <p>Events</p>
          </div>
        </div>
      </div>
      <div className=" h-10 md:h-[70px] mt-16 w-full bottom-0 left-0"></div>
    </footer>
  );
};

export default Footer;

