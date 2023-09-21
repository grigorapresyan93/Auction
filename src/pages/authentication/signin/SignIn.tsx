import AuthForm from "../../../components/auth/AuthForm";
import AuthTopLogo from "../../../components/auth/AuthTopLogo";
import MediaRegistration from "../../../components/shared/MediaRegistration";

function SignIn() {
  return (
    <div>
      <AuthTopLogo>Մուտք</AuthTopLogo>
      <AuthForm />
      <MediaRegistration suggestionText="Կամ մուտք գործեք" />
    </div>
  );
}

export default SignIn;
