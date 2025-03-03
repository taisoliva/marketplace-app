import { LucideIcon } from "lucide-react";

interface Props {
  Icon: LucideIcon;
  dataNumber?: number;
  details: string;
}
export const CardDashboard = ({ dataNumber, details, Icon }: Props) => {
  return (
    <div className="flex gap-2 bg-white w-[240px] h-[110px] rounded-2xl p-4">
      <div className="w-20 h-20 bg-[#D7EFF9] rounded-xl flex items-center justify-center">
        <Icon className="font-bold w-10 h-10 text-[#009CF0]" />
      </div>
      <div className="mb-10">
        <h1 className="font-bold text-gray-950 text-2xl">{dataNumber}</h1>
        <p className="text-gray-500 text-sm">{details}</p>
      </div>
    </div>
  );
};
