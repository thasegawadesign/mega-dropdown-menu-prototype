import DisclosureButton from "@/components/DisclosureButton";
import Logo from "@/components/Logo";
import MegaDropdownMenu from "@/components/MegaDropdownMenu";
import clsx from "clsx";

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
    </>
  );
}
