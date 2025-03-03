import { LucideIcon } from "lucide-react";
import { Title } from "../Title";

interface Props {
  Icon: LucideIcon;
  dataNumber: string;
  details: string;
}
export const CardDashboard = ({ dataNumber, details, Icon }: Props) => {
  return (
    <div className="flex gap-2 bg-white w-[240px] h-[110px] rounded-2xl p-4">
      <div className="w-20 h-20 bg-[#D7EFF9] rounded-xl flex items-center justify-center">
        <Icon className="font-bold w-10 h-10 text-[#009CF0]" />
      </div>
      <Title title={dataNumber} description={details} />
    </div>
  );
};
