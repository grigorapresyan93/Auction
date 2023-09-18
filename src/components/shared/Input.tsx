import className from 'classnames';
import { FC, ReactNode } from 'react';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
  suffix?: ReactNode | string;
  label?: string;
  error?: boolean;
}

const Input: FC<IInputProps> = ({ prefix, suffix, label, error, ...rest }) => {
  const classes = className(
    rest.className,
    'outline-none focus:outline-none focus-visible:outline-none border',
    {
      'border-[#F34635]': error
    }
  );

  return (
    <>
      {label?.length && (
        <label htmlFor="" className="font-mardoto text-[14px] font-normal leading-[17px] ">
          {label}
        </label>
      )}
      {prefix ? (
        <div>
          <span>Prefix</span>
          <input {...rest} className={classes} />
        </div>
      ) : suffix ? (
        <div className="flex items-center ">
          <input {...rest} className={classes} />
          <span>suffix</span>
        </div>
      ) : (
        <input {...rest} className={classes} />
      )}
    </>
  );
};

export default Input;
