"use client";

import { NavigationLink } from "@/components/ui/navigation-menu";
import { routes } from "@/shared/utils/routes";
import { ChartNoAxesCombined, Package } from "lucide-react";
import { usePathname } from "next/navigation";

export const HeaderMenu = () => {
  const pathname = usePathname();

  return (
    <div className="flex mx-auto">
      <NavigationLink
        isActive={pathname === routes.dashboard}
        href={`${routes.dashboard}`}
      >
        <ChartNoAxesCombined /> Dashboard
      </NavigationLink>
      <NavigationLink
        isActive={pathname === routes.products}
        href={`${routes.products}`}
      >
        <Package />
        Produtos
      </NavigationLink>
    </div>
  );
};
