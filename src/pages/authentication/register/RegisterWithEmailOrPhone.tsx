import AuthForm from "../../../components/auth/AuthForm";
import FormTopLogo from "../../../components/auth/AuthTopLogo";
import MediaRegistration from "../../../components/shared/MediaRegistration";

const RegisterWithEmailOrPhone = () => {
  return (
    <>
      <FormTopLogo>Գրանցում</FormTopLogo>
      <AuthForm byEmail />
      <MediaRegistration />
    </>
  );
};

export default RegisterWithEmailOrPhone;
