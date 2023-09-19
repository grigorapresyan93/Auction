import SmallLogo from '../../assets/images/logo_small.svg';
import { FC, ReactNode } from 'react';

interface IFormTopLogoProps {
  children: ReactNode;
}

const FormTopLogo: FC<IFormTopLogoProps> = ({ children }) => {
  return (
    <div className="flex flex-col space-y-10">
      <img src={SmallLogo} alt="logo" className="w-[80px] h-[80px] mx-auto" />
      <div className="font-mardoto leading-7 font-medium text-[#144272] text-[24px] underline underline-offset-8 decoration-2  text-center">
        {children}
      </div>
    </div>
  );
};

export default FormTopLogo;
