import type { TextInput } from "../../types/form-type";
import type { BaseFields } from "../../types/form-type";

interface Attributes {
  email: string;
  username: string;
  password: string;
}

interface Fields extends BaseFields {
  email: TextInput;
  username: TextInput;
  password: TextInput;
}

export const REGISTERATTRIBUTES: Attributes = {
  email: "",
  username: "",
  password: "",
};

export const REGISTERFIELDS: Fields = {
  email: {
    input: "text",
    name: "email",
    type: "text",
    title: "Email",
    maxLength: 50,
    width: 12,
    editable: true,
    required: true,
    placeholder: "Enter email",
  },
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
