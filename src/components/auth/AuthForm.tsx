import React, { ChangeEvent, FC, useState } from "react";

import Input from "../shared/Input";
import Button from "../shared/Button";
import PhoneInput from "../shared/PhoneInput/PhoneInput";

import constants from "./constants";
import useLocationEnhancer from "../../hooks/useLocationEnhancer";

const { INPUT_FIELDS_FOR_REGISTER } = constants;

interface IAuthFormProps {
  byPhone?: boolean;
  byEmail?: boolean;
  // eslint-disable-next-line no-unused-vars
  handleFormSubmit: (data: object) => void;
}

const AuthForm: FC<IAuthFormProps> = ({ byPhone, byEmail, handleFormSubmit }) => {
  const [formData, setFormData] = useState<object>({});
  const { lastPart } = useLocationEnhancer();

  const handlePhoneValueChange = (value: string) => {
    setFormData({ ...formData, phone: value });
  };

  const handleFieldValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      {lastPart === "register" ? (
        <div className="w-full mx-auto pt-[48px]">
          {INPUT_FIELDS_FOR_REGISTER.map((field) => (
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
                  placeholder="test@example.com"
                  onChange={handleFieldValueChange}
                />
              ) : field.key === "user_name" ? (
                <Input {...field.props} onChange={handleFieldValueChange} />
              ) : (
                ""
              )}
            </div>
          ))}

          <div className="flex items-center justify-end">
            <Button
              primary
              rounded
              className={"py-[12px] w-[191px] justify-center font-semibold"}
              onClick={() => handleFormSubmit(formData)}>
              Ուղարկել կոդը
            </Button>
          </div>
        </div>
      ) : (
        "SignIn view"
      )}
    </div>
  );
};

export default AuthForm;
