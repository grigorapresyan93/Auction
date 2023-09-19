import classes from "./classes";

const { INPUT_BASE_CLASSES, VALIDATION_TEXT_CLASS } = classes;

const RESEND_CODE_TIMER_DURATION = 60;

const INPUT_FIELDS = [
  {
    key: "password",
    props: {
      label: "Գաղտնաբառ",
      className: INPUT_BASE_CLASSES,
      type: "password",
      name: "password"
    }
  },
  {
    key: "repeat_password",
    props: {
      label: "Կրկնել գաղտնաբառը",
      className: INPUT_BASE_CLASSES,
      type: "password",
      name: "repeat_password"
    }
  }
];

const PASS_REQUIREMENTS = [
  {
    key: 1,
    req: "isValidLength",
    text: "8 կամ ավել նիշ",
    className: VALIDATION_TEXT_CLASS
  },
  {
    key: 2,
    req: "hasUpperCaseLetter",
    text: "Առնվազն մեկ մեծատառ",
    className: VALIDATION_TEXT_CLASS
  },
  {
    key: 3,
    req: "hasLowerCaseLetter",
    text: "Առնվազն մեկ փոքրատառ",
    className: VALIDATION_TEXT_CLASS
  },

  {
    key: 4,
    req: "hasNumber",
    text: "Առնվազն մեկ թիվ",
    className: VALIDATION_TEXT_CLASS
  }
];

export default {
  INPUT_FIELDS,
  PASS_REQUIREMENTS,
  RESEND_CODE_TIMER_DURATION
};
