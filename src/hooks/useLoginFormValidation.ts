import { useState } from "react";

export const useLoginFormValidation = () => {
  const [showValidationError, setShowValidationError] = useState({
    user_name: "",
    password: ""
  });

  const validateForm = (formData: { user_name?: string; password?: string }) => {
    if (Object.entries(formData).length === 0) {
      setShowValidationError({
        user_name: "Լրացրեք ձեր մուտքանունը",
        password: "Լրացրեք ձեր գաղտնաբառը"
      });
    } else if (formData.user_name && Object.entries(formData).length === 1) {
      setShowValidationError({
        ...showValidationError,
        password: "Լրացրեք ձեր գաղտնաբառը"
      });
    } else if (formData.password && Object.entries(formData).length === 1) {
      setShowValidationError({
        ...showValidationError,
        user_name: "Լրացրեք ձեր մուտքանունը"
      });
    } else {
      setShowValidationError({
        user_name: "",
        password: ""
      });
      return true;
    }
    return false;
  };

  return { showValidationError, validateForm, setShowValidationError };
};
