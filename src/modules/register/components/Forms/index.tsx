"use client";

import { UploadImage } from "@/components/common/upload";
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

export const RegisterForm = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <form>
      <h1 className="font-bold text-xl">Perfil</h1>
      <UploadImage />

      <div className="mt-5">
        <Input
          startContent={<User />}
          placeholder="Seu nome completo"
          label="Nome"
        />

        <Input
          startContent={<Phone />}
          placeholder="(00) 00000-0000"
          label="Telefone"
        />
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <p className="font-bold text-xl">Acesso</p>
        <Input
          placeholder="Seu e-mail de acesso"
          label="E-mail"
          startContent={<Mail />}
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
          name="password"
          type={isVisible ? "text" : "password"}
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
          name="password"
          type={isVisible ? "text" : "password"}
        />
      </div>

      <Button className="w-full mt-5 " variant={"default"}>
        Cadastrar <MoveRight className="ml-auto" />
      </Button>
    </form>
  );
};
