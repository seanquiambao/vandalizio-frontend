import { useState } from "react";
import type { BaseAttributes } from "../../types/form-type";
import { REGISTERATTRIBUTES, REGISTERFIELDS } from "../../data/forms/register";

import Form from "../../components/forms/form";
import Toaster from "../../utils/toaster";
import { api } from "../../utils/api";

const Register = () => {
  const [attributes, setAttributes] = useState<BaseAttributes>({
    ...REGISTERATTRIBUTES,
  });
  const handleSubmit = async () => {
    try {
      await api({
        method: "POST",
        url: "api/v1/auth/register",
        body: attributes,
      });

      Toaster("Successfully registered user!", "success");
    } catch {
      Toaster("Failed to register user", "error");
    }
  };
  return (
    <div>
      <Form
        title="Register"
        fields={REGISTERFIELDS}
        onSubmit={handleSubmit}
        setAttributes={setAttributes}
      />
    </div>
  );
};

export default Register;
