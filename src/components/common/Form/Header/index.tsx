interface Props {
  title: string;
  description: string;
}

export const Header = ({ title, description }: Props) => {
  return (
    <div className="mb-10">
      <h1 className="font-bold text-gray-950 text-2xl">{title}</h1>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
};
