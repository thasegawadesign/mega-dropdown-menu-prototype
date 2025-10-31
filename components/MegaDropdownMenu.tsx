"use client";

import { MEGA_SECTIONS, MegaSection, navId } from "@/constants/mega-data";
import clsx from "clsx";
import Link from "next/link";
import React, { useId, useRef, useState } from "react";

type Props = {
  sections?: MegaSection[];
};

export default function MegaDropdownMenu({ sections = MEGA_SECTIONS }: Props) {
  const [openId, setOpenId] = useState<navId | null>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const panelRefs = useRef<Record<string, HTMLElement | null>>({});
  const closeT = useRef<number | null>(null);
  const navIdBase = useId();

  const clearClose = () => {
    if (closeT.current) {
      clearTimeout(closeT.current);
      closeT.current = null;
    }
  };
  const scheduleClose = (ms = 1000) => {
    clearClose();
    closeT.current = window.setTimeout(() => setOpenId(null), ms);
  };

  const ids = (id: string) => ({
    button: `${navIdBase}-btn-${id}`,
    panel: `${navIdBase}-panel-${id}`,
  });

  return (
    <>
      <nav aria-label="グローバルナビゲーション">
        <ul className={clsx("hidden lg:flex")}>
          {sections.map((section) => {
            const open = openId === section.id;
            const { button, panel } = ids(section.id);
            return (
              <li key={section.id}>
                <button
                  id={button}
                  ref={(el) => {
                    triggerRefs.current[section.id] = el;
                  }}
                  aria-haspopup="menu"
                  aria-expanded={open}
                  aria-controls={panel}
                  className={clsx(
                    open
                      ? "after:bg-primary after:scale-y-100 after:opacity-100"
                      : "",
                    "group after:bg-primary relative h-18 cursor-pointer px-6 after:absolute after:inset-x-0 after:bottom-0.5 after:h-1 after:origin-bottom after:scale-y-0 after:opacity-0 after:transition-all after:duration-500 hover:after:scale-y-100 hover:after:opacity-100 hover:after:duration-200 focus-visible:after:absolute focus-visible:after:scale-y-100 focus-visible:after:opacity-100",
                  )}
                  onPointerEnter={() => {
                    clearClose();
                    setOpenId(section.id);
                  }}
                  onPointerLeave={() => scheduleClose(220)}
                  onFocus={() => {
                    clearClose();
                    setOpenId(section.id);
                  }}
                >
                  <span
                    className={clsx(
                      open ? "text-primary" : "",
                      "group-hover:text-primary group-focus-visible:text-primary text-sm font-medium tracking-wider text-gray-800 transition-colors",
                    )}
                  >
                    {section.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={clsx("absolute inset-x-0 top-18 z-50 hidden lg:block")}>
        <nav aria-label="メガメニュー">
          {sections.map((section) => {
            const open = openId === section.id;
            const { button, panel } = ids(section.id);
            return (
              <div
                key={section.id}
                className={clsx("absolute right-0 left-0")}
                onPointerEnter={clearClose}
                onPointerLeave={() => scheduleClose(220)}
                onFocusCapture={clearClose}
                onBlurCapture={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node))
                    scheduleClose(220);
                }}
              >
                <section
                  id={panel}
                  ref={(el) => {
                    panelRefs.current[section.id] = el;
                  }}
                  role="region"
                  aria-labelledby={button}
                  aria-hidden={!open}
                  hidden={!open}
                  className={clsx(
                    "origin-top bg-white transition-[max-height] delay-0 duration-500 ease-out",
                    open ? "max-h-screen" : "max-h-0",
                  )}
                >
                  <div
                    className={clsx(
                      "mx-auto max-w-[516px] pt-10 pb-20 transition delay-100 duration-300 will-change-[opacity,transform] xl:max-w-[556px] 2xl:max-w-[588px]",
                      open
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0",
                    )}
                    onKeyDown={(e) => {
                      if (e.key === "Escape") {
                        e.preventDefault();
                        setOpenId(null);
                        triggerRefs.current[section.id]?.focus();
                      }
                    }}
                  >
                    <h3 className={clsx("mb-8")}>
                      <Link
                        href={section.href}
                        className={clsx(
                          "hover:text-primary focus-visible:text-primary text-lg font-medium transition-colors",
                        )}
                      >
                        {section.label}
                      </Link>
                    </h3>
                    <ul className={clsx("grid grid-cols-3 gap-x-16 gap-y-4")}>
                      {section.columns?.map((column) => (
                        <React.Fragment key={column.title}>
                          {column.items.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                className={clsx(
                                  "hover:text-primary focus-visible:text-primary text-base transition-colors",
                                )}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </React.Fragment>
                      ))}
                    </ul>
                  </div>
                </section>
              </div>
            );
          })}
        </nav>
      </div>
      <div
        aria-hidden="true"
        role="presentation"
        tabIndex={-1}
        className={clsx(
          openId !== null ? "opacity-100" : "pointer-events-none opacity-0",
          "absolute inset-x-0 top-18 block h-screen w-full bg-black/40 transition-opacity duration-1000 ease-out",
        )}
      ></div>
    </>
  );
}
