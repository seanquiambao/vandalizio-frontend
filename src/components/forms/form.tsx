import { INPUTFIELDS } from "../../data/forms/input-fields";
import type { BaseFields } from "../../types/form-type";
import Title from "../ui/title";

type FormProps = {
  title: string;
  fields: BaseFields;
};
const Form = ({ title, fields }: FormProps) => {
  const handleSubmit = () => {
    console.log("Submitting!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Title title={title} />
      {Object.values(fields).map((field) => INPUTFIELDS[field.input](field))}
    </form>
  );
};

export default Form;
