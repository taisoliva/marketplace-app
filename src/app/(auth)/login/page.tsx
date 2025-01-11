"use client";

import { Input } from "@/components/ui/Input/input";
import { Eye, EyeOff, Mail } from "lucide-react";
import * as React from "react";

export default function Login() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex flex-col gap-3">
      <Input
        startContent={<Mail />}
        placeholder="Seu e-mail cadastrado"
        label={"E-MAIL"}
        name="email"
      />

      <Input
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
    </div>
  );
}
