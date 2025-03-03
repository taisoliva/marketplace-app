export const If = ({
  condition,
  children,
}: {
  condition: boolean;
  children: React.ReactNode;
}) => {
  if (condition) {
    return children;
  }
  return null;
};
