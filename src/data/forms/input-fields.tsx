import type { JSX } from "react";
import type { Field, TextInput } from "../../types/form-type";

export const INPUTFIELDS: Record<string, (field: Field) => JSX.Element> = {
  text: (field: TextInput) => {
    console.log(field);
    return(
    <input
      type={field.type}
      name={field.name}
      maxLength={field.maxLength}
      width={field.width}
      required={field.required}
      placeholder={field.placeholder}
      disabled={!field.editable}
    />
  )},
};
