import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mt-5 flex w-full items-center justify-between border-b-2 px-2 pb-7 sm:px-4">
      <Link href="/" className="flex space-x-3">
        <Image
          alt="header text"
          src="/git.png"
          className="h-8 w-8 sm:h-12 sm:w-12"
          width={32}
          height={32}
        />
        <h1 className="ml-2 text-2xl font-bold tracking-tight sm:text-4xl">
          Git Explorer
        </h1>
      </Link>
    </header>
  );
}
