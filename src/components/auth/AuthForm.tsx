import { FC, useState } from "react";
import { useLocation } from "react-router-dom";

import constants from "./constants";

import Input from "../shared/Input";
import Button from "../shared/Button";

import PhoneInput from "../shared/PhoneInput/PhoneInput";
import PasswordInputEye from "../shared/PasswordInputEye";

const { INPUT_FIELDS_FOR_REGISTER, INPUT_FIELDS_FOR_LOGIN } = constants;

interface IAuthFormProps {
  byPhone?: boolean;
  byEmail?: boolean;
}
const AuthForm: FC<IAuthFormProps> = ({ byPhone, byEmail }) => {
  const [passInputType, setPassInputType] = useState("password");
  const handlePhoneValueChange = (value: string) => {
    console.log(value);
  };
  const location = useLocation();
  const path = location.pathname;
  const currentLocation = path.match(/\/([^/]+)$/)?.[1] || "";
  const currentInputFild =
    currentLocation === "register" ? INPUT_FIELDS_FOR_REGISTER : INPUT_FIELDS_FOR_LOGIN;

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
              <Input {...field.props} placeholder="test@gmail.com" />
            ) : field.key === "user_name" ? (
              <Input {...field.props} />
            ) : field.key === "password" ? (
              <Input
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

        <div
          className={` ${
            currentLocation == "sign-in" ? "justify-between" : "justify-end"
          } flex items-center `}>
          {currentLocation == "sign-in" && (
            <p className=" font-mardoto text-[12px] text-[#1376DD]">Մոռացե՞լ եք գաղտնաբառը</p>
          )}
          <Button primary rounded className={"py-[12px] w-[191px] justify-center font-semibold"}>
            {currentLocation === "register" ? "Ուղարկել կոդը" : "Մուտք գործել"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
