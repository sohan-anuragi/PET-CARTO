import Announcement from "./Announcement";
import SocialLinks from "./SocialLinks";
import TopLinks from "./TopLinks";

export default function TopBar() {
  return (
    <>
      <div className="flex lg:justify-between justify-center px-[1.5rem] bg-[#0d1b3d]">
        <SocialLinks />
        <Announcement />
        <TopLinks />
      </div>
    </>
  );
}
