import { Icon } from "../../../public/images/Icon";
import { MainImage } from "../../../public/images/Main";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full">
      <div className="grid grid-cols-2">
        <div className="col-span-1 p-10 ">
          <Icon />
          <MainImage />
        </div>
        <div className="flex items-center justify-center m-5 bg-white w-[500px] ml-auto m-5 h-full rounded-3xl">
          <div className="w-full h-full p-20">{children}</div>
        </div>
      </div>
    </div>
  );
}
