"use client";

import { Icons } from "@/components/Icons";
import AppearUp from "@/components/motion/AppearUp";
import RotateIcon from "@/components/motion/RotateIcon";
import { routesConfig } from "@/lib/config";
import { Link } from "@nextui-org/link";
import {
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

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

      <NavbarMenu className="flex justify-center items-center gap-8">
        {routesConfig.mainNav.map((item, index) => (
          <Fragment key={`${item.href}-${index}`}>
            <AppearUp>
              <NavbarMenuItem
                isActive={pathname === item.href}
                className="relative data-[active=true]:after:content-[''] data-[active=true]:after:absolute data-[active=true]:after:bottom-1/6 data-[active=true]:after:left-0 data-[active=true]:after:right-0 data-[active=true]:after:h-[5px] data-[active=true]:after:rounded-[2px] data-[active=true]:after:bg-gradient-to-t from-primary-600"
              >
                <Link
                  className="w-full text-3xl flex justify-center items-center"
                  href={item.href}
                  size="lg"
                  color="foreground"
                >
                  {item.title}
                </Link>
              </NavbarMenuItem>
            </AppearUp>
          </Fragment>
        ))}
        <NavbarMenuItem className="mt-4"></NavbarMenuItem>
      </NavbarMenu>
    </>
  );
}
