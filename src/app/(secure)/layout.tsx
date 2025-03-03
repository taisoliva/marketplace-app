import { Header } from "@/components/common/Header";

export default function SecureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header.Root>
        <Header.Icon />
        <Header.Menu />
        <Header.User />
      </Header.Root>
      <div className="flex justify-start mx-40 my-auto">{children}</div>
    </>
  );
}
