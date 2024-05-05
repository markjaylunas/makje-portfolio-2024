"use client";

import { Button } from "@nextui-org/button";
import { Skeleton } from "@nextui-org/skeleton";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icons } from "./Icons";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Skeleton className="size-8 rounded-md" />;

  return (
    <Button
      variant="light"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      isIconOnly
      size="sm"
    >
      {theme === "dark" ? (
        <Icons.moon className="size-5" />
      ) : (
        <Icons.sun className="size-5" />
      )}
    </Button>
  );
}
