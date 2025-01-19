import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  title: string;
  text: string;
  href: string;
}
export const Footer = ({ title, text, href }: Props) => {
  return (
    <div className="flex flex-col gap-2 mt-5">
      <p className="text-sm text-gray-500">{title}</p>
      <Button className="w-full text-primary" variant="outline" asChild>
        <Link href={href}> {text} </Link>
      </Button>
    </div>
  );
};
