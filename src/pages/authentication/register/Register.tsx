import { useContext, JSX } from "react";

import RegisterPasswordPart from "../../../components/auth/RegisterPasswordPart";
import AuthCodeVerification from "../../../components/auth/AuthCodeVerification";
import RegisterWithEmailOrPhone from "../../../components/auth/RegisterWithEmailOrPhone";

import AuthContext from "../../../context/auth-context";

interface ISteps {
  [key: number]: JSX.Element;
}

const STEPS: ISteps = {
  [1]: <RegisterWithEmailOrPhone />,
  [2]: <AuthCodeVerification />,
  [3]: <RegisterPasswordPart />
};

function Register() {
  const { currentStep } = useContext(AuthContext);

  return STEPS[currentStep];
}

export default Register;
