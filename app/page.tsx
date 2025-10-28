import Logo from "@/app/components/Logo";
import MegaDropdownMenu from "@/app/components/MegaDropdownMenu";
import DisclosureButton from "./components/DisclosureButton";

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
