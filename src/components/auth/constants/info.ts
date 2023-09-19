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

const INPUT_FIELDS_FOR_REGISTER = [
  {
    key: "user_name",
    props: {
      label: "Անուն Ազգանուն",
      className: INPUT_BASE_CLASSES,
      type: "text",
      name: "user_name"
    }
  },
  {
    key: "phone_number",
    props: {
      label: "Հեռախոսահամար",
      className: INPUT_BASE_CLASSES,
      type: "text",
      name: "phone_number"
    }
  },
  {
    key: "email_address",
    props: {
      label: "Էլ. հասցե",
      className: INPUT_BASE_CLASSES,
      type: "mail",
      name: "email_address"
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
  INPUT_FIELDS_FOR_REGISTER,
  RESEND_CODE_TIMER_DURATION
};
