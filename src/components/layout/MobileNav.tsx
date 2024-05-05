import { Button } from "@nextui-org/button";
import { Icons } from "../Icons";

export default function MobileNav() {
  return (
    <>
      <Button size="sm" variant="light" isIconOnly className="md:hidden">
        <Icons.menu className="size-6" />
      </Button>
    </>
  );
}
