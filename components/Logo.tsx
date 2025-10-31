import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <>
      <h1 className={clsx("leading-0 lg:mr-10")}>
        <Link href="/" className={clsx("inline-block")}>
          <Image
            src="/logo.svg"
            alt="ロゴ"
            width={160}
            height={72}
            priority
            className={clsx("h-14 w-auto lg:h-18")}
          />
        </Link>
      </h1>
    </>
  );
}
