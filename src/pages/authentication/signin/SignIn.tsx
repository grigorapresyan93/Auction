import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import authContext from "../../../context/auth-context";
import AuthContext from "../../../context/auth-context";
import validateUtil from "../../../utils/validator.util";
import AuthForm from "../../../components/auth/AuthForm";
import AuthTopLogo from "../../../components/auth/AuthTopLogo";
import MediaRegistration from "../../../components/auth/MediaRegistration";

import { AuthType } from "../../../types/auth.types";
import { signInSchema } from "../../../schemas/auth.schema";
import { submitStepData } from "../../../services/axios.service";

function SignIn() {
  const { registrationData } = useContext(AuthContext);
  const [signInErrors, setSignInErrors] = useState<object>({});
  const { onRegistrationDataChange, onLogin } = useContext(authContext);

  const navigate = useNavigate();
  const handleSignIn = async (data: AuthType) => {
    const { isValid, errors } = await validateUtil(data, signInSchema);

    setSignInErrors(errors);

    if (!isValid) return;

    // api logics
    submitStepData(data)
      .then((data) => {
        onRegistrationDataChange(data);
        onLogin();
        navigate("/", { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <AuthTopLogo>Մուտք</AuthTopLogo>
      <AuthForm
        byEmail={registrationData.byEmail}
        byPhone={registrationData.byPhone}
        errors={signInErrors}
        setErrors={setSignInErrors}
        handleFormSubmit={handleSignIn}
      />
      <MediaRegistration suggestionText="Կամ մուտք գործեք" />
    </div>
  );
}

export default SignIn;
