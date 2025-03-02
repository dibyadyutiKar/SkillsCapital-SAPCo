import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [active, setActive] = useState("");

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <img
            src="/assets/logo.jpeg"
            alt="SkillsCapital"
            className="h-12 cursor-pointer"
          />
        </Link>

        {/* Navigation */}
        <nav className="space-x-6 flex">
          {[
            { name: "Home", href: "home" },
            { name: "About Us", href: "about" },
            { name: "Case Studies", href: "case-studies" },
            { name: "Resources", href: "resources" },
          ].map((link) => (
            <Link key={link.name} href={`#${link.href}`} passHref>
              <span
                className={`relative text-gray-700 hover:text-blue-600 transition group cursor-pointer ${
                  active === link.href ? "text-blue-600" : ""
                }`}
                onClick={() => setActive(link.href)}
              >
                {link.name}
                {/* Underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out ${
                    active === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
