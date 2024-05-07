import { routesConfig, siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Link } from "@nextui-org/link";
import { NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import { Icons } from "../Icons";
import { ThemeSwitcher } from "../ThemeSwitcher";
import NavLink from "./NavLink";

type Props = {
  isMenuOpen: boolean;
};

export default function MainNav({ isMenuOpen }: Props) {
  return (
    <>
      <NavbarContent>
        <NavbarBrand>
          <Link href={siteConfig.url} color="foreground" className="rounded-md">
            <Icons.logo className="mr-3 size-10" />
            <span className="font-semibold text-xl">Makje</span>
          </Link>
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
