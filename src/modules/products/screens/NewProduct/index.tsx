import { Form } from "../../components/Forms";
import { ImageProduct } from "../../components/Image";

export const NewProductScreen = () => {
  return (
    <div className="grid grid-cols-[1fr_2fr] gap-4">
      <div className="w-full h-80 bg-red-200">
        <ImageProduct />
      </div>
      <div className="w-full h-96 bg-white rounded-lg p-5 gap-5 flex flex-col">
        <Form.Header />
        <Form.Inputs />
        <Form.Buttons />
      </div>
    </div>
  );
};
