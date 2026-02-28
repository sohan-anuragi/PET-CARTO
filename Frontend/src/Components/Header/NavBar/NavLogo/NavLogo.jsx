import LogoImg from "../../../../assets/NavLogo/NavLogo5.png";

export default function NavLogo() {
  return (
    <>
      <a href="/" className="min-w-[11rem]">
        <img src={LogoImg} alt="PetCarto Logo" className="w-70 h-20" />
      </a>
    </>
  );
}
