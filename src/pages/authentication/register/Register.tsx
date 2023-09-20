import { useContext } from "react";
import PasswordPart from "./PasswordPart";
import CodeVerification from "./CodeVerification";
import RegisterWithEmailOrPhone from "./RegisterWithEmailOrPhone";
import AuthContext from "../../../context/auth-context";

function Register() {
  const authCtx = useContext(AuthContext);
  console.log(authCtx);
  return (
    <>
      {authCtx.currentStep === 1 && <RegisterWithEmailOrPhone />}
      {authCtx.currentStep === 2 && <CodeVerification />}
      {authCtx.currentStep === 3 && <PasswordPart />}
    </>
  );
}

export default Register;
