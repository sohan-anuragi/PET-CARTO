import LogoImg from "../../../../assets/NavLogo/NavLogo6.png";

export default function NavLogo() {
  return (
    <>
      <a href="/" className="min-w-[11rem] p-[0.2rem]">
        <img src={LogoImg} alt="PetCarto Logo" className="w-70 h-20" />
      </a>
    </>
  );
}
