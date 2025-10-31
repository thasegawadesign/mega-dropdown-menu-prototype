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
              <button
                className={clsx(
                  "group after:bg-primary relative h-18 cursor-pointer px-6 after:absolute after:inset-x-0 after:bottom-0.5 after:h-[3px] after:origin-bottom after:scale-y-0 after:opacity-0 after:transition-all after:duration-500 hover:after:scale-y-100 hover:after:opacity-100 hover:after:duration-200",
                )}
              >
                <span
                  className={clsx(
                    "group-hover:text-primary group-focus-visible:text-primary text-sm font-medium text-gray-800 transition-colors",
                  )}
                >
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
