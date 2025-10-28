import DisclosureButton from "@/app/components/DisclosureButton";
import Logo from "@/app/components/Logo";
import MegaDropdownMenu from "@/app/components/MegaDropdownMenu";

export default function Home() {
  return (
    <>
      <header>
        <Logo />
        <MegaDropdownMenu />
        <DisclosureButton />
      </header>
    </>
  );
}
