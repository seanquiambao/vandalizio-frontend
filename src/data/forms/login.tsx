import type { TextInput } from "../../types/form-type";

interface Attributes {
  username: string;
  password: string;
}

interface Fields {
  username: TextInput;
  password: TextInput;
}

export const ATTRIBUTES: Attributes = {
  username: "",
  password: "",
};

export const FIELDS: Fields = {
  username: {
    input: "text",
    name: "username",
    type: "text",
    title: "Username",
    maxLength: 50,
    width: 12,
    editable: true,
    required: true,
    placeholder: "Enter username",
  },
  password: {
    input: "text",
    name: "password",
    type: "password",
    title: "Password",
    maxLength: 50,
    width: 12,
    editable: true,
    required: true,
    placeholder: "Enter password",
  },
};
