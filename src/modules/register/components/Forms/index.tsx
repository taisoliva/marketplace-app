"use client";

import { UploadImage } from "@/modules/register/components/UploadImage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input/input";
import {
  Eye,
  EyeOff,
  KeyRound,
  Mail,
  MoveRight,
  Phone,
  User,
} from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { registerForm, RegisterSchema } from "../../schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterService } from "../../data/hooks/useRegister";
import { useRouter } from "next/navigation";
import { routes } from "@/shared/utils/routes";

export const RegisterForm = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerForm),
  });

  const { mutateAsync: registerSeller } = useRegisterService();

  const router = useRouter();

  const onSubmit = async (data: RegisterSchema) => {
    try {
      await registerSeller(data);

      router.push(`${routes.login}`);
    } catch {
      setError("email", { message: "E-mail ou senha inválidos" });
      setError("password", { message: "E-mail ou senha inválidos" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="font-bold text-xl">Perfil</h1>

      <UploadImage setValue={setValue} />

      <div className="mt-5">
        <Input
          startContent={<User />}
          placeholder="Seu nome completo"
          label="Nome"
          {...register("name")}
          error={errors.name?.message}
        />

        <Input
          startContent={<Phone />}
          placeholder="(00) 00000-0000"
          label="Telefone"
          {...register("phone")}
          error={errors.phone?.message}
        />
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <p className="font-bold text-xl">Acesso</p>
        <Input
          placeholder="Seu e-mail de acesso"
          label="E-mail"
          startContent={<Mail />}
          {...register("email")}
          error={errors.email?.message}
        />

        <Input
          startContent={<KeyRound />}
          endContent={
            <button
              aria-label="toggle password visibility"
              className="focus:outline-none focus:ring-2 focus:ring-orangeBase"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeOff className="text-2xl text-default-400 pointer-events-none " />
              ) : (
                <Eye className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          placeholder="Sua senha de acesso"
          label={"SENHA"}
          type={isVisible ? "text" : "password"}
          {...register("password")}
          error={errors.password?.message}
        />

        <Input
          startContent={<KeyRound />}
          endContent={
            <button
              aria-label="toggle password visibility"
              className="focus:outline-none focus:ring-2 focus:ring-orangeBase"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeOff className="text-2xl text-default-400 pointer-events-none " />
              ) : (
                <Eye className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          placeholder="Confirme a senha"
          label={"Confirmar senha"}
          type={isVisible ? "text" : "password"}
          {...register("passwordConfirmation")}
          error={errors.passwordConfirmation?.message}
        />
      </div>

      <Button className="w-full mt-5 " variant={"default"}>
        Cadastrar <MoveRight className="ml-auto" />
      </Button>
    </form>
  );
};
