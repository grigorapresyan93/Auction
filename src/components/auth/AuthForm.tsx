import Input from "../shared/Input";
import Button from "../shared/Button";
import PhoneInput from "../shared/PhoneInput/PhoneInput";
import { useLocation } from "react-router-dom";
import constants from "./constants";
import { FC } from "react";
const { INPUT_FIELDS_FOR_REGISTER } = constants;

interface IAuthFormProps {
  byPhone?: boolean;
  byEmail?: boolean;
}
const AuthForm: FC<IAuthFormProps> = ({ byPhone, byEmail }) => {
  const handlePhoneValueChange = (value: string) => {
    console.log(value);
  };
  const location = useLocation();
  const path = location.pathname;
  const lastPart = path.match(/\/([^/]+)$/)?.[1] || "";

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
                <Input {...field.props} placeholder="test@gmail.com" />
              ) : field.key === "user_name" ? (
                <Input {...field.props} />
              ) : (
                ""
              )}
            </div>
          ))}

          <div className="flex items-center justify-end">
            <Button primary rounded className={"py-[12px] w-[191px] justify-center font-semibold"}>
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
