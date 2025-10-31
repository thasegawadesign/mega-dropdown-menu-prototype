import DisclosureButton from "@/components/DisclosureButton";
import Logo from "@/components/Logo";
import MegaDropdownMenu from "@/components/MegaDropdownMenu";

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
