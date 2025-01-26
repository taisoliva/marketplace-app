import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  text: string;
  href: string;
}
export const Footer = ({ title, text, href }: Props) => {
  return (
    <div className="flex flex-col gap-2 mt-5">
      <p className="text-sm text-gray-500 mr-auto">{title}</p>
      <Button className="text-primary" variant="outline" asChild>
        <Link href={href}>
          {text} <MoveRight className="ml-auto" />
        </Link>
      </Button>
    </div>
  );
};
