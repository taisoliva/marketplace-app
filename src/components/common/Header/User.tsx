"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useProfile } from "@/shared/data/hooks/useProfilePicture";
import { routes } from "@/shared/utils/routes";
import { AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";

export const HeaderUser = () => {
  const { data: profile } = useProfile();

  return (
    <div className="flex gap-2 ml-auto">
      <Link href={`${routes.products}/new`}>
        <Button>+ Novo produto</Button>
      </Link>
      <Avatar>
        {profile?.avatar.url ? (
          <AvatarImage src={profile?.avatar?.url} />
        ) : (
          <AvatarImage src="https://i.imgur.com/6VBx3io.png" />
        )}
      </Avatar>
    </div>
  );
};
