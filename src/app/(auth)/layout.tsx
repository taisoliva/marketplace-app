import { Logo } from "../../../public/images/Logo";
import { MainImage } from "../../../public/images/Main";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="grid grid-cols-2 w-full h-full">
        <div className="col-span-1 p-10">
          <Logo />
          <MainImage />
        </div>

        <div className="flex items-center justify-center ">
          <div className="bg-white w-[500px] max-h-[90vh] overflow-y-auto rounded-3xl shadow-md">
            <div className="p-10 w-3/4 ml-10 m-auto">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
