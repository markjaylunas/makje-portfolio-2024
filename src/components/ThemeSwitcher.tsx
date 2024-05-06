"use client";

import { Button, ButtonProps } from "@nextui-org/button";
import { Skeleton } from "@nextui-org/skeleton";
import { extendVariants } from "@nextui-org/system";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icons } from "./Icons";

export function ThemeSwitcher(props: ButtonProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Skeleton className="size-8 rounded-md" />;

  return (
    <ThemeButton
      variant="light"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      isIconOnly
      size="sm"
      {...props}
    >
      {theme === "dark" ? (
        <>
          <Icons.moon className="size-5" />
          {props.isIconOnly ? null : "Dark"}
        </>
      ) : (
        <>
          <Icons.sun className="size-5" />
          {props.isIconOnly ? null : "Light"}
        </>
      )}
    </ThemeButton>
  );
}

export const ThemeButton = extendVariants(Button, {
  variants: {
    size: {
      full: "w-full",
    },
  },
});
