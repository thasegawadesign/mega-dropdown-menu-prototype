import DisclosureButton from "@/components/DisclosureButton";
import Logo from "@/components/Logo";
import MegaDropdownMenu from "@/components/MegaDropdownMenu";
import clsx from "clsx";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header
        className={clsx(
          "relative flex items-center justify-between border-b border-gray-200",
        )}
      >
        <Logo />
        <MegaDropdownMenu />
        <DisclosureButton />
      </header>
      <main>
        <Image
          src="/photo.avif"
          width={5464}
          height={3640}
          alt="都市の航空写真"
          priority
        />
      </main>
    </>
  );
}
