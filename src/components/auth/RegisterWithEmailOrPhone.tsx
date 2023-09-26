import { useContext, useEffect, useState } from "react";

import AuthForm from "./AuthForm";
import FormTopLogo from "./AuthTopLogo";
import MediaRegistration from "./MediaRegistration";

import AuthContext from "../../context/auth-context";

import { IAuthSignUp } from "../../interface/auth.interface";
import { submitStepData } from "../../services/axios.service";

const RegisterWithEmailOrPhone = () => {
  const { registrationData, onNextStep } = useContext(AuthContext);
  const [signUpErrors, setSignUpErrors] = useState({});

  const handleAuthFormSubmitAction = (data: IAuthSignUp) => {
    submitStepData(data)
      .then((data) => {
        onNextStep(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {}, [registrationData]);

  return (
    <>
      <FormTopLogo>Գրանցում</FormTopLogo>
      <AuthForm
        errors={signUpErrors}
        setErrors={setSignUpErrors}
        byEmail={registrationData.byEmail}
        byPhone={registrationData.byPhone}
        handleFormSubmit={handleAuthFormSubmitAction}
      />
      <MediaRegistration suggestionText="Կամ գրանցվեք" />
    </>
  );
};

export default RegisterWithEmailOrPhone;
