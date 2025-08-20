import type { JSX } from "react";
import type { BaseAttributes, Field, TextInput } from "../../types/form-type";

export const INPUTFIELDS: Record<
  string,
  (
    field: Field,
    setAttributes: React.Dispatch<React.SetStateAction<BaseAttributes>>,
  ) => JSX.Element
> = {
  text: (
    field: TextInput,
    setAttributes: React.Dispatch<React.SetStateAction<BaseAttributes>>,
  ) => {
    return (
      <input
        className="p-1 border rounded-md border-black/50"
        type={field.type}
        name={field.name}
        maxLength={field.maxLength}
        width={field.width}
        required={field.required}
        placeholder={field.placeholder}
        disabled={!field.editable}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setAttributes((prev: BaseAttributes) => ({
            ...prev,
            [event.target.name]: event.target.value,
          }))
        }
      />
    );
  },
};
