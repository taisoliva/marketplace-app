interface Props {
  children: React.ReactNode;
}

export const HeaderRoot = ({ children }: Props) => {
  return (
    <div className="w-full grid grid-cols-3 items-center h-fit p-4 my-4">
      {children}
    </div>
  );
};
