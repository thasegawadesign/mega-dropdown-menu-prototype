import clsx from "clsx";
import { Menu } from "lucide-react";

export default function DisclosureButton() {
  return (
    <>
      <button
        className={
          "flex cursor-pointer flex-col items-center gap-y-1 px-3.5 py-2"
        }
      >
        <Menu className={clsx("h-6 w-6 text-gray-500")} />
        <span className={"text-[8px] font-medium text-gray-800"}>メニュー</span>
      </button>
    </>
  );
}
