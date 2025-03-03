"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input/input";
import { Eye, EyeOff, KeyRound, Mail } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../../schemas/login.schema";
import { useLoginService } from "../../data/hooks/useLogin";
import { routes } from "@/shared/utils/routes";
import { useRouter } from "next/navigation";

export const LoginScreen = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginSchema>();

  const { mutateAsync: login } = useLoginService();

  const onSubmit = async (data: LoginSchema) => {
    try {
      await login({ data });

      router.push(`${routes.dashboard}`);
    } catch {
      setError("email", { message: "E-mail ou senha inválidos" });
      setError("password", { message: "E-mail ou senha inválidos" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        startContent={<Mail />}
        placeholder="Seu e-mail cadastrado"
        label={"E-MAIL"}
        type="email"
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

      <Button className="w-full mt-5">Acessar</Button>
    </form>
  );
};
