"use client";

import { NavItem } from "@/lib/types";
import { Link } from "@nextui-org/link";
import { NavbarItem } from "@nextui-org/navbar";
import { usePathname } from "next/navigation";

type Props = {
  item: NavItem;
};

export default function NavLink({ item }: Props) {
  const pathname = usePathname();
  return (
    <NavbarItem isActive={pathname === item.href}>
      <Link href={item.href} aria-current="page" color="foreground">
        {item.title}
      </Link>
    </NavbarItem>
  );
}
