"use client";

import { MEGA_SECTIONS, MegaSection } from "@/constants/mega-data";
import clsx from "clsx";

type Props = {
  sections?: MegaSection[];
};

export default function MegaDropdownMenu({ sections = MEGA_SECTIONS }: Props) {
  return (
    <>
      <nav>
        <ul className={clsx("hidden lg:flex")}>
          {sections.map((section) => (
            <li key={section.label}>
              <button className={clsx("h-18 cursor-pointer px-6")}>
                <span className={clsx("text-sm font-medium text-gray-800")}>
                  {section.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
