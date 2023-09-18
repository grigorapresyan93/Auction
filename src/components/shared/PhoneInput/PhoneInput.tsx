import PhoneInput from 'react-phone-input-2';
import './PhoneInput.css';
import { FC } from 'react';
interface ICustomPhoneInputProps {
  label?: string;
  [key: string]: any;
}
const CustomPhoneInput: FC<ICustomPhoneInputProps> = ({ label, ...rest }) => {
  return (
    <>
      {label?.length && (
        <label htmlFor="" className="font-mardoto text-[14px] font-normal leading-[17px] ">
          {label}
        </label>
      )}
      <PhoneInput specialLabel={''} country={'am'} {...rest} />
    </>
  );
};

export default CustomPhoneInput;
