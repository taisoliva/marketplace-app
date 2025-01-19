import { Form } from "@/components/common/Form";
import { RegisterForm } from "../../components/Forms";

export const RegisterScreen = () => {
  return (
    <>
      <Form.Header
        title="Crie sua conta"
        description="Informe os seus dados pessoais e de acesso"
      />

      <RegisterForm />

      <Form.Footer title="Já tem uma conta?" text="Acessar" href="/login" />
    </>
  );
};
