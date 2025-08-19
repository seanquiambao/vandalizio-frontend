import { INPUTFIELDS } from "../../data/forms/input-fields";
import type { BaseFields } from "../../types/form-type";
import Button from "../ui/button";
import Subheader from "../ui/subheader";

type FormProps = {
  title: string;
  fields: BaseFields;
};
const Form = ({ title, fields }: FormProps) => {
  const handleSubmit = () => {
    console.log("Submitting!");
  };

  return (
    <div className="bg-white border-black/50 border rounded-md p-2 w-1/2">
      <form onSubmit={handleSubmit}>
        <Subheader title={title} divider />
        <div className="flex flex-col gap-2">
          {Object.values(fields).map((field) => (
            <div className="flex flex-col">
              <div className="text-black text-lg font-bold">
                {field.title}
                <span>{field.required && "*"}</span>
              </div>

              {INPUTFIELDS[field.input](field)}
            </div>
          ))}
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
