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
  const [isTheSame, setIsTheSame] = useState(false);

  useEffect(() => {
    const validatePassword = () => {
      setIsValidLength(password.length >= 8);
      setHasUpperCaseLetter(/[A-Z]/.test(password));
      setHasLowerCaseLetter(/[a-z]/.test(password));
      setHasNumber(/[0-9]/.test(password));
    };
    // TODO => check any types
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

  useEffect(() => {
    const validateResPassword = () => {
      setIsTheSame(password == resPassword);
    };

    const debounce = (func: () => void, delay: number) => {
      let timeout: any;
      return function (this: any, ...args: any) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
      };
    };

    const delayedValidation = debounce(validateResPassword, 1000);

    delayedValidation();

    return () => clearTimeout(delayedValidation as unknown as any);
  }, [resPassword]);

  return {
    isValidLength,
    hasLowerCaseLetter,
    hasUpperCaseLetter,
    hasNumber,
    isTheSame
  };
};

export default usePasswordValidation;
