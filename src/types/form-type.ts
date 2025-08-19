interface Input {
  width: number;
  required: boolean;
  editable: boolean;
}

export type TextInput = Input & {
  input: "text";
  title: string;
  placeholder: string;
  maxLength: number;
  name: string;
  width: number;
  type: string;
  editable: boolean;
  required: boolean;
};

export type Field = TextInput;

export type BaseFields = Record<string, Field>;
