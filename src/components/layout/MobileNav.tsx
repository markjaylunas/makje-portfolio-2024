"use client";

import { Icons } from "@/components/Icons";
import AppearUp from "@/components/motion/AppearUp";
import RotateIcon from "@/components/motion/RotateIcon";
import MyLink from "@/components/ui/MyLink";
import { routesConfig } from "@/lib/config";
import {
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { usePathname } from "next/navigation";
import { Dispatch, Fragment, SetStateAction } from "react";

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export default function MobileNav({ isMenuOpen, setIsMenuOpen }: Props) {
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
                <MyLink
                  className="w-full text-3xl flex justify-center items-center"
                  href={item.href}
                  color="foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </MyLink>
              </NavbarMenuItem>
            </AppearUp>
          </Fragment>
        ))}
        <NavbarMenuItem className="mt-4"></NavbarMenuItem>
      </NavbarMenu>
    </>
  );
}
