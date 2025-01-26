interface Props {
  children: React.ReactNode;
}

export const HeaderRoot = ({ children }: Props) => {
  return (
    <div className="w-full flex items-center justify-between h-fit p-4 my-4">
      {children}
    </div>
  );
};
