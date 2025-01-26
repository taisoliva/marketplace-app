import { Header } from "@/components/common/Header";

export default function SecureLayout() {
  return (
    <Header.Root>
      <Header.Icon />
      <Header.Menu />
      <Header.User />
    </Header.Root>
  );
}
