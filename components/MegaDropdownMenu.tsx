"use client";

import { MEGA_SECTIONS, MegaSection, navId } from "@/constants/mega-data";
import clsx from "clsx";
import { useState } from "react";

type Props = {
  sections?: MegaSection[];
};

export default function MegaDropdownMenu({ sections = MEGA_SECTIONS }: Props) {
  const [openId, setOpenId] = useState<navId | null>(null);

  return (
    <>
      <nav>
        <ul className={clsx("hidden lg:flex")}>
          {sections.map((section) => (
            <li key={section.id}>
              <button
                className={clsx(
                  "group after:bg-primary relative h-18 cursor-pointer px-6 after:absolute after:inset-x-0 after:bottom-0.5 after:h-[3px] after:origin-bottom after:scale-y-0 after:opacity-0 after:transition-all after:duration-500 hover:after:scale-y-100 hover:after:opacity-100 hover:after:duration-200 focus-visible:after:absolute focus-visible:after:scale-y-100 focus-visible:after:opacity-100",
                )}
                onMouseEnter={() => setOpenId(section.id)}
                aria-expanded={openId === section.id}
              >
                <span
                  className={clsx(
                    "group-hover:text-primary group-focus-visible:text-primary text-sm font-medium tracking-wider text-gray-800 transition-colors",
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
