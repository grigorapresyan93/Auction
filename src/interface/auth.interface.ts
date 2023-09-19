export interface IPasswordValidationResult {
  hasNumber: boolean;
  isValidLength: boolean;
  hasUpperCaseLetter: boolean;
  hasLowerCaseLetter: boolean;
}
export interface IDebauncedResult {
  debaunced: boolean;
  isTheSame: boolean;
  repDebaunced: boolean;
  validationResult: IPasswordValidationResult;
}
