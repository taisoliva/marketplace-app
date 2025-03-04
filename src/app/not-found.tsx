import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-svw h-svh">
      <h2 className="text-primary font-bold">
        Opss!! Não encontramos essa página
      </h2>
      <p>
        Voltar para o{" "}
        <Link
          href="/dashboard"
          className="hover:text-primary transition-all duration-300"
        >
          Dashboard
        </Link>{" "}
      </p>
    </div>
  );
}
