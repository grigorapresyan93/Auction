import className from "classnames";
import { ChangeEvent, useEffect, useState } from "react";

import approved from "../../assets/images/approved.svg";
import declined from "../../assets/images/declined.svg";

import Input from "../shared/Input";
import Button from "../shared/Button";
import FormTopLogo from "./FormTopLogo";

import usePasswordValidation from "../../hooks/usePasswordValidation";

import { IPasswordValidationResult } from "../../interface/auth.interface";

const INPUT_BASE_CLASSES = className(
  "border border-[#667085] w-[300px] md:w-[415px] h-[52px] rounded-[6px] px-[10px]"
);
const VALIDATION_TEXT_CLASS = className(
  "font-mardoto font-[400] text-[16px] text-[#101B28] opacity-[80%] "
);

const ERROR_TEXT_BASE_CLASSES = className(
  "text-[10px] mt-[8px] font-mardoto text-[#F34635] font-normal"
);

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

const WritePassword = () => {
  const [passwordState, setPasswordState] = useState({
    password: "",
    repeat_password: ""
  });
  const [hasFalseValue, setHasFalseValue] = useState(false);

  const handlePasswordInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setPasswordState({
      ...passwordState,
      [name]: value
    });
  };

  const validationObject = usePasswordValidation(
    passwordState.password,
    passwordState.repeat_password
  );

  const { isTheSame, ...rest } = validationObject;
  useEffect(() => {
    if (!passwordState.password.length) {
      setHasFalseValue(false);
      return;
    }
    setHasFalseValue(Object.values(rest).some((value) => value === false));
  }, [validationObject]);

  const renderedItems = PASS_REQUIREMENTS.map(({ req, text }) => {
    if (!validationObject[req as keyof IPasswordValidationResult]) {
      return text;
    }
  })
    .filter((item) => item !== undefined)
    .join(", ");
  return (
    <>
      <FormTopLogo>Գրանցում</FormTopLogo>
      <form action="#" className={"mt-[48px]"}>
        {INPUT_FIELDS.map((field) => (
          <div key={field.key} className={"mb-[24px]"}>
            <Input
              error={hasFalseValue && field.props.name === "password"}
              {...field.props}
              onChange={handlePasswordInputChange}
            />
            {hasFalseValue && field.props.name === "password" && (
              <div className={ERROR_TEXT_BASE_CLASSES}>{renderedItems}</div>
            )}
          </div>
        ))}

        <div className={"flex justify-end mt-[40px] mb-[60px]"}>
          <Button
            rounded
            disabled={true}
            onClick={(e) => e.preventDefault()}
            className={
              "bg-[#CCCCCD] w-[168px] text-[#8A898C] font-mardoto text-[16px] leading-[20px] py-[12px] font-semibold justify-center"
            }>
            Հաստատել
          </Button>
        </div>

        {/* Password requirements */}
        <div className="justify-center items-start flex flex-col ml-[24px]">
          <div className=" font-mardoto font-medium text-[18px] text-[#101B28] opacity-[80%] mb-[16px]">
            Գաղտնաբառի պահանջներ
          </div>
          <div className="flex flex-col items-start  ">
            {PASS_REQUIREMENTS.map(({ key, req, text, className }) => (
              <div key={key} className="flex items-center justify-center mb-[5px] ml-[8px]">
                {passwordState.password.length ? (
                  validationObject[req as keyof IPasswordValidationResult] ? (
                    <img src={approved} alt="" className="mr-[8px]" />
                  ) : (
                    <img src={declined} alt="" className="mr-[8px]" />
                  )
                ) : (
                  <></>
                )}
                <div className={className}>{text}</div>
              </div>
            ))}
          </div>
        </div>
      </form>
    </>
  );
};

export default WritePassword;
