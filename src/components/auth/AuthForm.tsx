import { ChangeEvent, FC, useState } from "react";

import constants from "./constants";

import Input from "../shared/Input";
import Button from "../shared/Button";

import PhoneInput from "../shared/PhoneInput/PhoneInput";
import PasswordInputEye from "../shared/PasswordInputEye";

import useLocationEnhancer from "../../hooks/useLocationEnhancer";
import classNames from "classnames";

const { INPUT_FIELDS_FOR_REGISTER, INPUT_FIELDS_FOR_LOGIN } = constants;

interface IAuthFormProps {
  byPhone?: boolean;
  byEmail?: boolean;
  // eslint-disable-next-line no-unused-vars
  handleFormSubmit: (data: object) => void;
}

const AuthForm: FC<IAuthFormProps> = ({ byPhone, byEmail, handleFormSubmit }) => {
  const [formData, setFormData] = useState<object>({});
  const [passInputType, setPassInputType] = useState<string>("password");

  const { lastPart } = useLocationEnhancer();

  const handlePhoneValueChange = (value: string) => {
    setFormData({ ...formData, phone: value });
  };

  const handleFieldValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const currentInputFild =
    lastPart === "register" ? INPUT_FIELDS_FOR_REGISTER : INPUT_FIELDS_FOR_LOGIN;

  const BUTTON_CLASS = classNames("justify-end", {
    "justify-between": lastPart == "sign-in"
  });

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
              <Input {...field.props} onChange={handleFieldValueChange} />
            ) : field.key === "password" ? (
              <Input
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
            ) : (
              ""
            )}
          </div>
        ))}

        <div className={` ${BUTTON_CLASS} flex items-center `}>
          {lastPart == "sign-in" && (
            <p className=" font-mardoto text-[12px] text-[#1376DD]">Մոռացե՞լ եք գաղտնաբառը</p>
          )}
          <Button
            primary
            rounded
            className={"py-[12px] w-[191px] justify-center font-semibold"}
            onClick={() => handleFormSubmit(formData)}>
            {lastPart === "register" ? "Ուղարկել կոդը" : "Մուտք գործել"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
