import { useState, useEffect } from "react";
import { IPasswordValidationResult } from "../interface/auth.interface";

const usePasswordValidation = (
  password: string,
  resPassword: string
): IPasswordValidationResult => {
  const [isValidLength, setIsValidLength] = useState(false);
  const [hasUpperCaseLetter, setHasUpperCaseLetter] = useState(false);
  const [hasLowerCaseLetter, setHasLowerCaseLetter] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [isTheSame, setIsTheSame] = useState(true);

  useEffect(() => {
    const validatePassword = () => {
      const isLengthValid = password.length >= 8;
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNum = /[0-9]/.test(password);

      setIsValidLength(isLengthValid);
      setHasUpperCaseLetter(hasUpperCase);
      setHasLowerCaseLetter(hasLowerCase);
      setHasNumber(hasNum);
      setIsTheSame(password === resPassword);
    };

    const debounce = (func: () => void, delay: number) => {
      let timeout: any;
      return function (this: any, ...args: any) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
      };
    };

    const delayedValidation = debounce(validatePassword, 500);

    delayedValidation();

    return () => clearTimeout(delayedValidation as unknown as any);
  }, [password]);

  return {
    isValidLength,
    hasLowerCaseLetter,
    hasUpperCaseLetter,
    hasNumber,
    isTheSame
  };
};

export default usePasswordValidation;
