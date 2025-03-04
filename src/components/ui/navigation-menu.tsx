"use client";

import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface NavigationLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean;
  isActive?: boolean;
}

const NavigationLink = React.forwardRef<HTMLAnchorElement, NavigationLinkProps>(
  ({ className, asChild = false, isActive, onClick, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (isActive) {
        event.preventDefault(); // Impede o redirecionamento
        return; // Cancela o clique
      }
      if (onClick) {
        onClick(event); // Executa a função original, se fornecida
      }
    };

    return (
      <Comp
        ref={ref}
        className={cn(
          "flex items-center gap-1 justify-center px-4 py-2 text-sm transition-colors hover:cursor-pointer hover:bg-[#F5EAEA] hover:text-[#F24D0D] ",
          {
            "bg-[#F5EAEA] text-[#F24D0D] rounded-xl font-bold hover:cursor-default":
              isActive,
            "text-gray-500": !isActive,
          },
          className
        )}
        onClick={handleClick}
        {...props}
      />
    );
  }
);

NavigationLink.displayName = "NavigationLink";

export { NavigationLink };
