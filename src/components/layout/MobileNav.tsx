"use client";

import { routesConfig } from "@/lib/config";
import { Link } from "@nextui-org/link";
import { NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "../ThemeSwitcher";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <NavbarMenu>
      {routesConfig.mainNav.map((item, index) => (
        <NavbarMenuItem
          isActive={pathname === item.href}
          key={`${item.href}-${index}`}
          className="py-1"
        >
          <Link
            className="w-full"
            href={item.href}
            size="lg"
            color="foreground"
          >
            {item.title}
          </Link>
        </NavbarMenuItem>
      ))}
      <NavbarMenuItem className="mt-4">
        <ThemeSwitcher className="w-full" variant="flat" isIconOnly={false} />
      </NavbarMenuItem>
    </NavbarMenu>
  );
}
