import { FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

export default function SocialLinks() {
  return (
    <div className="flex gap-5 px-[1rem] items-center hidden lg:flex py-[0.5rem] bg-[#0d1b3d] ">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[white]"
      >
        <FaFacebookF size={15} />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-white "
      >
        <FaXTwitter size={15} />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[white]"
      >
        <FaInstagram size={15} />
      </a>
      <a
        href="https://www.tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[white]"
      >
        <FaTiktok size={15} />
      </a>
    </div>
  );
}
