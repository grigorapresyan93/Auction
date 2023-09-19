import React from "react";
import FormTopLogo from "../../../components/auth/AuthTopLogo";
import LoginForm from "../../../components/auth/LoginForm";
import MediaRegistration from "../../../components/shared/MediaRegistration";

const RegisterWithEmailOrPhone = () => {
  return (
    <>
      <FormTopLogo>Գրանցում</FormTopLogo>
      <LoginForm />
      <MediaRegistration />
    </>
  );
};

export default RegisterWithEmailOrPhone;
