import { FormControl, ValidationErrors } from "@angular/forms";

export default class CustomValidators {
  static PasswordStrengthValidator(control: FormControl): ValidationErrors {
    const value = control.value;
    if (value.length < 8) {
      return { passwordStrength: true };
    }
    const upperCaseCharacters = /[A-Z]+/g;
    const lowerCaseCharacters = /[a-z]+/g;
    if (lowerCaseCharacters.test(value) === false && upperCaseCharacters.test(value) === false) {
      return { passwordStrength: true };
    }

    let numberCharacters = /[0-9]+/g;
    if (numberCharacters.test(value) === false) {
      return { passwordStrength: true };
    }
    let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (specialCharacters.test(value) === false) {
      return { passwordStrength: true };
    }
    return null
  }
}