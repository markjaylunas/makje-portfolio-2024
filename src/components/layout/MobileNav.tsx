"use client";

import { routesConfig } from "@/lib/config";
import { Link } from "@nextui-org/link";
import {
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { usePathname } from "next/navigation";
import { Icons } from "../Icons";
import RotateIcon from "../motion/RotateIcon";

type Props = {
  isMenuOpen: boolean;
};

export default function MobileNav({ isMenuOpen }: Props) {
  const pathname = usePathname();

  return (
    <>
      <NavbarContent className="flex sm:hidden" justify="end">
        <RotateIcon>
          <NavbarMenuToggle
            icon={isMenuOpen ? <Icons.x /> : <Icons.menu />}
            className="h-9 w-9 p-1"
          />
        </RotateIcon>
      </NavbarContent>

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
        <NavbarMenuItem className="mt-4"></NavbarMenuItem>
      </NavbarMenu>
    </>
  );
}
