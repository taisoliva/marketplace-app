import { NavigationLink } from "@/components/ui/navigation-menu";
import { ChartNoAxesCombined, Package } from "lucide-react";

export const HeaderMenu = () => {
  return (
    <div className="flex">
      <NavigationLink isActive href="/dashboard">
        <ChartNoAxesCombined /> Dashboard
      </NavigationLink>
      <NavigationLink href="/product">
        <Package />
        Produtos
      </NavigationLink>
    </div>
  );
};
