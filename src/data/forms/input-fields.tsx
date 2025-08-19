import type { JSX } from "react";
import type { Field, TextInput } from "../../types/form-type";


export const INPUTFIELDS: Record<string, (field: Field) => JSX.Element> = {
  text: (field: TextInput) => {
    return(
    <input
      className="p-1 border rounded-md border-black/50"
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
