"use client";

import MyLink from "@/components/ui/MyLink";
import { NavItem } from "@/lib/types";
import { NavbarItem } from "@nextui-org/navbar";
import { usePathname } from "next/navigation";

type Props = {
  item: NavItem;
};

export default function NavLink({ item }: Props) {
  const pathname = usePathname();
  return (
    <NavbarItem isActive={pathname === item.href}>
      <MyLink href={item.href} aria-current="page" color="foreground">
        {item.title}
      </MyLink>
    </NavbarItem>
  );
}
