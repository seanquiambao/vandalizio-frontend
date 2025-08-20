import { useState } from "react";
import type { BaseAttributes } from "../../types/form-type";
import { REGISTERATTRIBUTES, REGISTERFIELDS } from "../../data/forms/register";

import Form from "../../components/forms/form";

const Register = () => {
  const [attributes, setAttributes] = useState<BaseAttributes>({
    ...REGISTERATTRIBUTES,
  });
  const handleSubmit = () => {
    console.log(attributes);
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
