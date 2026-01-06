import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-white dark:bg-black">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <span className="font-bold text-lg">MyApp</span>

        <div className="flex gap-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
