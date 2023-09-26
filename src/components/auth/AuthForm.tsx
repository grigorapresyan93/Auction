import classNames from "classnames";

import { ChangeEvent, FC, SetStateAction, useState, Dispatch } from "react";

import constants from "./constants";

import Input from "../shared/Input";
import Button from "../shared/Button";

import PhoneInput from "../shared/PhoneInput/PhoneInput";
import PasswordInputEye from "../shared/PasswordInputEye";

import useLocationEnhancer from "../../hooks/useLocationEnhancer";
import { AuthType } from "../../types/auth.types";
import { IAuthSignUp } from "../../interface/auth.interface";

const { INPUT_FIELDS_FOR_REGISTER, INPUT_FIELDS_FOR_LOGIN, ERROR_TEXT_BASE_CLASSES } = constants;

interface IAuthFormProps {
  byPhone?: boolean;
  byEmail?: boolean;
  errors: AuthType | any;
  setErrors: Dispatch<SetStateAction<AuthType>>;
  // eslint-disable-next-line no-unused-vars
  handleFormSubmit: (data: IAuthSignUp) => void;
}

const AuthForm: FC<IAuthFormProps> = ({
  byPhone,
  byEmail,
  errors,
  setErrors,
  handleFormSubmit
}) => {
  const [formData, setFormData] = useState<AuthType>({});
  const [passInputType, setPassInputType] = useState<string>("password");

  const { lastPart } = useLocationEnhancer();

  const currentInputFild =
    lastPart === "sign-in" ? INPUT_FIELDS_FOR_LOGIN : INPUT_FIELDS_FOR_REGISTER;

  const BUTTON_CLASS = classNames("justify-end", {
    "justify-between": lastPart == "sign-in"
  });

  const handlePhoneValueChange = (value: string) => {
    setFormData({ ...formData, phone: value });
  };

  const handleFieldValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
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
            ) : field.key === "email" && byEmail ? (
              <Input
                error={errors[field.key]}
                {...field.props}
                placeholder="example@gmail.com"
                onChange={handleFieldValueChange}
              />
            ) : field.key === "full_name" ? (
              <>
                <Input
                  error={errors[field.key]}
                  {...field.props}
                  onChange={handleFieldValueChange}
                  placeholder={`${
                    lastPart == "sign-in" ? "Հեռախոսահամար, էլ. հասցե կամ ID" : "էլ. հասցե "
                  }`}
                />
              </>
            ) : field.key === "password" ? (
              <>
                <Input
                  error={errors[field.key]}
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
              </>
            ) : (
              ""
            )}
            {errors[field.key] && (
              <div className={ERROR_TEXT_BASE_CLASSES}>{errors[field.key]}</div>
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
            onClick={() => handleFormSubmit(formData)}>
            {lastPart === "sign-in" ? "Մուտք գործել" : "Ուղարկել կոդը"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
