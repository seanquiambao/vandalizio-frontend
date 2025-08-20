import type {
  BaseAttributes,
  BaseFields,
  TextInput,
} from "../../types/form-type";

interface Attributes extends BaseAttributes {
  username: string;
  password: string;
}

interface Fields extends BaseFields {
  username: TextInput;
  password: TextInput;
}

export const LOGINATTRIBUTES: Attributes = {
  username: "",
  password: "",
};

export const LOGINFIELDS: Fields = {
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
