interface InfoProps {
  name: string;
  description: string;
  price: number;
}

export const Info = ({ name, description, price }: InfoProps) => {
  return (
    <div className="flex flex-col gap-2 m-4">
      <div className="flex justify-between">
        <p className="font-bold">{name}</p>
        <p className="font-bold">
          {(price / 100).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <p>{description}</p>
    </div>
  );
};
