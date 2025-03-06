interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <div className="bg-white rounded-lg w-full relative">{children}</div>;
};
