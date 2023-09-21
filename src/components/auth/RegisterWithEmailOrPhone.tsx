import { useContext, useEffect } from "react";

import AuthForm from "./AuthForm";
import FormTopLogo from "./AuthTopLogo";
import MediaRegistration from "./MediaRegistration";

import AuthContext from "../../context/auth-context";

const RegisterWithEmailOrPhone = () => {
  const { onNextStep, registrationData } = useContext(AuthContext);

  const handleAuthFormSubmitAction = (data: object) => {
    onNextStep({ ...registrationData, ...data });
  };

  useEffect(() => {
    console.log(registrationData);
  }, [registrationData]);

  return (
    <>
      <FormTopLogo>Գրանցում</FormTopLogo>
      <AuthForm
        byEmail={registrationData.byEmail}
        byPhone={registrationData.byPhone}
        handleFormSubmit={handleAuthFormSubmitAction}
      />
      <MediaRegistration />
    </>
  );
};

export default RegisterWithEmailOrPhone;
