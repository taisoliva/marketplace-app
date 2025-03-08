"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useProfile } from "@/shared/data/hooks/useProfilePicture";
import { useSignOutService } from "@/shared/data/hooks/useSignOut";
import { routes } from "@/shared/utils/routes";
import { AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

export const HeaderUser = () => {
  const { data: profile } = useProfile();

  const { mutateAsync: signOut } = useSignOutService();

  return (
    <div className="flex gap-2 ml-auto">
      <Link href={`${routes.products}/new`}>
        <Button>+ Novo produto</Button>
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="hover:cursor-pointer">
            {profile?.avatar?.url ? (
              <AvatarImage src={profile?.avatar?.url} />
            ) : (
              <AvatarImage src="https://i.imgur.com/6VBx3io.png" />
            )}
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => signOut()}
            className="text-primary focus: outline-none hover:text-primary/50 hover:cursor-pointer"
          >
            Sair
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
