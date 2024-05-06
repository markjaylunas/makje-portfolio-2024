import { Icons } from "@/components/Icons";
import { routesConfig, siteConfig } from "@/lib/config";
import { Link } from "@nextui-org/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { ThemeSwitcher } from "../ThemeSwitcher";
import MobileNav from "./MobileNav";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <Navbar maxWidth="2xl" classNames={navbarClassNames}>
      <NavbarContent>
        <NavbarBrand>
          <Link href={siteConfig.url} color="foreground">
            <Icons.logo className="mr-3 size-10" />
            <span className="font-semibold text-xl">Makje</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {routesConfig.mainNav.map((item) => (
          <NavLink key={item.href} item={item} />
        ))}

        <ThemeSwitcher isIconOnly={true} />
      </NavbarContent>

      <NavbarContent className="flex sm:hidden" justify="end">
        <NavbarMenuToggle icon={<Icons.menu />} className="h-9 w-9 p-1" />
      </NavbarContent>

      <MobileNav />
    </Navbar>
  );
}

const navbarClassNames = {
  item: [
    "flex",
    "relative",
    "h-full",
    "items-center",
    "data-[active=true]:after:content-['']",
    "data-[active=true]:after:absolute",
    "data-[active=true]:after:bottom-1/4",
    "data-[active=true]:after:left-0",
    "data-[active=true]:after:right-0",
    "data-[active=true]:after:h-[10px]",
    "data-[active=true]:after:rounded-[2px]",
    "data-[active=true]:after:bg-gradient-to-t from-primary-600",
  ],
};
