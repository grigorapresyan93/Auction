export interface IPasswordValidationResult {
  isValidLength: boolean;
  hasUpperCaseLetter: boolean;
  hasLowerCaseLetter: boolean;
  hasNumber: boolean;
  isTheSame: boolean;
}
