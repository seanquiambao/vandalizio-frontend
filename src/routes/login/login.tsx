import type { BaseAttributes } from "../../types/form-type";
import { useState } from "react";
import { LOGINATTRIBUTES, LOGINFIELDS } from "../../data/forms/login";
import { api } from "../../utils/api";

import Form from "../../components/forms/form";
import Toaster from "../../utils/toaster";

const Login = () => {
  const [attributes, setAttributes] = useState<BaseAttributes>(LOGINATTRIBUTES);

  const handleSubmit = async () => {
    try {
      await api({
        method: "POST",
        url: "api/v1/auth/authenticate",
        body: attributes,
      });

      Toaster("Successfully login user!", "success");
    } catch {
      Toaster("Failed to login user", "error");
    }
  };
  return (
    <div>
      <Form
        title="Login"
        fields={LOGINFIELDS}
        onSubmit={handleSubmit}
        setAttributes={setAttributes}
      />
    </div>
  );
};

export default Login;
