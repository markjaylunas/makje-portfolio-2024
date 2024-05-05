import { Icons } from "@/components/Icons";
import MainNav from "@/components/layout/MainNav";
import { siteConfig } from "@/lib/config";
import { Link } from "@nextui-org/link";
import { ThemeSwitcher } from "../ThemeSwitcher";
import MobileNav from "./MobileNav";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="h-16 fixed top-0 w-full z-50 backdrop-blur-sm">
      <nav className="container max-w-7xl mx-auto px-8 flex justify-between items-center h-full">
        <Link href={siteConfig.url} color="foreground">
          <Icons.logo className="mr-3" />
          <span className="font-semibold">Makje</span>
        </Link>

        <MainNav />
        <MobileNav />
      </nav>
    </header>
  );
}
