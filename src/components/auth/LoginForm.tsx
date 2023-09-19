import Input from "../shared/Input";
import Button from "../shared/Button";
import PhoneInput from "../shared/PhoneInput/PhoneInput";

const LoginForm = () => {
  const handlePhoneValueChange = (value: string) => {
    console.log(value);
  };

  return (
    <div>
      <div className="w-full mx-auto pt-[48px]">
        <Input
          className="border-[#667085] px-4 py-[13px] rounded-md mb-[24px] w-full"
          label="Անուն Ազգանուն"
          type="text"
        />

        {/* Phone Input */}

        <PhoneInput
          label={"Հեռախոսահամար"}
          className={"w-[300px] md:w-[415px] h-[52px] border border-[#667085] rounded-md mb-[24px]"}
          type={"text"}
          onChange={handlePhoneValueChange}
          placeholder={""}
        />

        {/* Email Input */}

        {/*<Input*/}
        {/*  className="border-[#667085] px-4 py-[13px] rounded-md w-full mb-[40px] shadow-[0px 1px 3px 1px #00000026]"*/}
        {/*  label=" Էլ. հասցե"*/}
        {/*  placeholder="example@gmail.com"*/}
        {/*  type="text"*/}
        {/*/>*/}

        <div className="flex items-center justify-end">
          <Button primary rounded className={"py-[12px] w-[191px] justify-center font-semibold"}>
            Ուղարկել կոդը
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
