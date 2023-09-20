import { useContext } from "react";
import AuthForm from "../../../components/auth/AuthForm";
import FormTopLogo from "../../../components/auth/AuthTopLogo";
import MediaRegistration from "../../../components/shared/MediaRegistration";
import AuthContext from "../../../context/auth-context";

const RegisterWithEmailOrPhone = () => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <FormTopLogo>Գրանցում</FormTopLogo>
      <AuthForm byEmail />
      <MediaRegistration />
      <button
        onClick={() => {
          authCtx.onNextStep({ name: "test" });
          console.log(authCtx.registrationData);
        }}>
        test
      </button>
    </>
  );
};

export default RegisterWithEmailOrPhone;
