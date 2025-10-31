import clsx from "clsx";
import { Menu } from "lucide-react";

export default function DisclosureButton() {
  return (
    <>
      <button
        className={
          "flex cursor-pointer flex-col items-center justify-center gap-y-1 border-l border-gray-200 px-3.5 py-2 lg:ml-10 lg:h-18 xl:ml-20 2xl:ml-28"
        }
      >
        <Menu className={clsx("h-6 w-6 text-gray-500")} />
        <span className={"text-[8px] font-medium text-gray-800 lg:text-[10px]"}>
          メニュー
        </span>
      </button>
    </>
  );
}
