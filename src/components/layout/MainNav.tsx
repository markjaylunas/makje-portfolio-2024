import { Icons } from "@/components/Icons";
import NavLink from "@/components/layout/NavLink";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import MyLink from "@/components/ui/MyLink";
import { routesConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import Link from "next/link";

type Props = {
  isMenuOpen: boolean;
};

export default function MainNav({ isMenuOpen }: Props) {
  return (
    <>
      <NavbarContent>
        <NavbarBrand>
          <MyLink as={Link} href="/" color="foreground" className="rounded-md">
            <Icons.logo className="mr-3 size-10" />
            <span className="font-medium text- text-xl">Makje</span>
          </MyLink>

          <ThemeSwitcher
            variant="flat"
            className={cn("hidden ml-4", isMenuOpen && "flex")}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {routesConfig.mainNav.map((item) => (
          <NavLink key={item.href} item={item} />
        ))}

        <ThemeSwitcher isIconOnly={true} />
      </NavbarContent>
    </>
  );
}
