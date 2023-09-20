import React, { useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
  // eslint-disable-next-line no-unused-vars
  onNextStep: (data: any) => {},
  currentStep: 1,
  registrationData: {}
});

export const AuthContextProvider = (props: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const [registrationData, setRegistrationData] = useState({});

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const nextStepHandler = (data: any) => {
    setCurrentStep(currentStep + 1);
    handleRegistrationData(data);
  };

  const handleRegistrationData = (data: object) => {
    setRegistrationData({ ...data, ...registrationData });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        registrationData: registrationData,
        onLogin: loginHandler,
        onLogout: logoutHandler,
        onNextStep: nextStepHandler,
        currentStep: currentStep
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
