import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="font-bold text-3xl bg-gradient-to-bl from-[#00d2ff] to-[#3a7bd5] text-transparent bg-clip-text hover:cursor-pointer"
    >
      <Image src={"/favicon.ico"} alt="logo" height={20} width={20} />
    </Link>
  );
};

export default Logo;
