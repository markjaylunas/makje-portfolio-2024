"use client";

import { routesConfig } from "@/lib/config";
import { Link } from "@nextui-org/link";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "../ThemeSwitcher";

export default function MainNav() {
  const pathname = usePathname();
  return (
    <ul className="hidden md:flex justify-center items-center gap-8">
      {routesConfig.mainNav.map((item) => {
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              color={pathname === item.href ? "primary" : "foreground"}
            >
              {item.title}
            </Link>
          </li>
        );
      })}

      <ThemeSwitcher />
    </ul>
  );
}
