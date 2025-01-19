"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input/input";
import { Eye, EyeOff, KeyRound, Mail } from "lucide-react";
import React from "react";

export const LoginScreen = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <Input
        startContent={<Mail />}
        placeholder="Seu e-mail cadastrado"
        label={"E-MAIL"}
        name="email"
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

      <Button className="w-full mt-auto">Acessar</Button>
    </>
  );
};
