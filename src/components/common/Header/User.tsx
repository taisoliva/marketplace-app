import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AvatarImage } from "@radix-ui/react-avatar";

export const HeaderUser = () => {
  return (
    <div className="flex gap-2 ml-auto">
      <Button>+ Novo produto</Button>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
      </Avatar>
    </div>
  );
};
