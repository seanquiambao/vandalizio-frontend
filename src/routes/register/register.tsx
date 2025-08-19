import Form from "../../components/forms/form";
import { REGISTERFIELDS } from "../../data/forms/register";

const Register = () => {
  return (
    <div>
      <Form title="Register" fields={REGISTERFIELDS} />
    </div>
  );
};

export default Register;
