import { useState, useEffect } from 'react';

interface PasswordValidationResult {
  isValidLength: boolean;
  hasUpperCaseLetter: boolean;
  hasLowerCaseLetter: boolean;
  hasNumber: boolean;
}

const usePasswordValidation = (password: string): PasswordValidationResult => {
  const [isValidLength, setIsValidLength] = useState(false);
  const [hasUpperCaseLetter, setHasUpperCaseLetter] = useState(false);
  const [hasLowerCaseLetter, setHasLowerCaseLetter] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);

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
    hasNumber
  };
};

export default usePasswordValidation;
