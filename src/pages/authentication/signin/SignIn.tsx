import { useContext } from "react";
import AuthForm from "../../../components/auth/AuthForm";
import AuthTopLogo from "../../../components/auth/AuthTopLogo";
import MediaRegistration from "../../../components/auth/MediaRegistration";
import AuthContext from "../../../context/auth-context";

function SignIn() {
  const { registrationData } = useContext(AuthContext);
  return (
    <div>
      <AuthTopLogo>Մուտք</AuthTopLogo>
      <AuthForm
        byEmail={registrationData.byEmail}
        byPhone={registrationData.byPhone}
        handleFormSubmit={() => {}}
      />
      <MediaRegistration suggestionText="Կամ մուտք գործեք" />
    </div>
  );
}

export default SignIn;
