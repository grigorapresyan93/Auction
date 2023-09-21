import { ChangeEvent, FC, useState } from "react";

import classNames from "classnames";

import constants from "./constants";

import Input from "../shared/Input";
import Button from "../shared/Button";

import PhoneInput from "../shared/PhoneInput/PhoneInput";
import PasswordInputEye from "../shared/PasswordInputEye";

import useLocationEnhancer from "../../hooks/useLocationEnhancer";
import { useLoginFormValidation } from "../../hooks/useLoginFormValidation";

const { INPUT_FIELDS_FOR_REGISTER, INPUT_FIELDS_FOR_LOGIN, ERROR_TEXT_BASE_CLASSES } = constants;

interface IAuthFormProps {
  byPhone?: boolean;
  byEmail?: boolean;
  // eslint-disable-next-line no-unused-vars
  handleFormSubmit: (data: object) => void;
}

const AuthForm: FC<IAuthFormProps> = ({ byPhone, byEmail, handleFormSubmit }) => {
  const [formData, setFormData] = useState<{
    phone?: string;
    password?: string;
    user_name?: string;
  }>({});

  const [passInputType, setPassInputType] = useState<string>("password");

  const { lastPart } = useLocationEnhancer();
  const { showValidationError, validateForm, setShowValidationError } = useLoginFormValidation();

  const handlePhoneValueChange = (value: string) => {
    setFormData({ ...formData, phone: value });
  };

  const handleFieldValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });

    setShowValidationError({
      ...showValidationError,
      [name]: ""
    });
  };

  const currentInputFild =
    lastPart === "register" ? INPUT_FIELDS_FOR_REGISTER : INPUT_FIELDS_FOR_LOGIN;

  const BUTTON_CLASS = classNames("justify-end", {
    "justify-between": lastPart == "sign-in"
  });

  const handleSignIn = () => {
    const hasNoErrors = validateForm(formData);
    if (hasNoErrors) {
      handleFormSubmit(formData);

      setFormData({ user_name: "", password: "" });
    }
  };

  return (
    <div>
      <div className="w-full mx-auto pt-[48px]">
        {currentInputFild.map((field) => (
          <div key={field.key} className={"mb-[24px]"}>
            {field.key === "phone_number" && byPhone ? (
              <PhoneInput
                label={"Հեռախոսահամար"}
                className={
                  "w-[300px] md:w-[415px] h-[52px] border border-[#667085] rounded-md mb-[24px]"
                }
                type={"text"}
                onChange={handlePhoneValueChange}
                placeholder={""}
              />
            ) : field.key === "email_address" && byEmail ? (
              <Input
                {...field.props}
                placeholder="test@gmail.com"
                onChange={handleFieldValueChange}
              />
            ) : field.key === "user_name" ? (
              <>
                <Input
                  // value={formData[field.key]}
                  error={showValidationError.user_name.length > 0}
                  {...field.props}
                  onChange={handleFieldValueChange}
                  placeholder={`${lastPart == "sign-in" && "Հեռախոսահամար, էլ. հասցե կամ ID"}`}
                />
                {showValidationError.user_name.length > 0 && (
                  <div className={ERROR_TEXT_BASE_CLASSES}>{showValidationError.user_name}</div>
                )}
              </>
            ) : field.key === "password" ? (
              <>
                <Input
                  // value={formData.password}
                  error={showValidationError.password.length > 0}
                  onChange={handleFieldValueChange}
                  {...field.props}
                  type={passInputType}
                  suffix={
                    <PasswordInputEye
                      onToggle={(type) => {
                        setPassInputType(type);
                      }}
                    />
                  }
                />
                {showValidationError.password.length > 0 && (
                  <div className={ERROR_TEXT_BASE_CLASSES}>{showValidationError.password}</div>
                )}
              </>
            ) : (
              ""
            )}
          </div>
        ))}

        <div className={` ${BUTTON_CLASS} flex items-center `}>
          {lastPart == "sign-in" && (
            <p className=" font-mardoto text-[12px] text-[#1376DD] cursor-pointer">
              Մոռացե՞լ եք գաղտնաբառը
            </p>
          )}
          <Button
            hover
            active
            primary
            rounded
            className={"py-[12px] w-[191px] justify-center font-semibold"}
            onClick={handleSignIn}>
            {lastPart === "register" ? "Ուղարկել կոդը" : "Մուտք գործել"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
