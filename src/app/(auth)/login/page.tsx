"use client";

import { Form } from "@/components/common/Form";
import { LoginScreen } from "@/modules/login/screens/login";
import * as React from "react";

export default function Login() {
  return (
    <div className="flex flex-col h-full justify-between">
      <Form.Header
        title="Acesse sua conta"
        description="Informe seu e-mail e senha paara entrar"
      />
      <div className="h-60 flex flex-col">
        <LoginScreen />
      </div>
      <Form.Footer
        title="Ainda não tem uma conta?"
        href="/register"
        text="Cadastrar"
      />
    </div>
  );
}
