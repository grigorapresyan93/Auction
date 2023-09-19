import React, { useEffect, useState } from 'react';

import classNames from 'classnames';

import Button from '../../components/shared/Button';
import FormTopLogo from '../../components/auth/FormTopLogo';
import VerificationInput from '../../components/auth/VerificationInput';

const RESEND_CODE_TIMER_DURATION = 60;
const TEXT_BASE_CLASSES = classNames(
  'text-[#101B28CC] font-mardoto text-center text-[14px] font-normal'
);
const RESEND_BUTTON_CLASSES = classNames(
  'w-[300px] md:w-[343px] py-[12px] text-[#144272] mx-auto mt-[60px] flex justify-center hover:text-[#fff] text-center rounded-[1000px] bg-[#F0F3FF] hover:bg-[#F4B405] text-[16px] font-semibold leading-[20px] shadow-[0px_1px_3px_1px_rgba(0, 0, 0, 0.15)] hover:shadow-[0px_1px_3px_1px_rgba(244,180,5, 0.15)]'
);

const CodeVerification = () => {
  const [showTimer, setShowTimer] = useState<boolean>(true);
  const [duration, setDuration] = useState<number>(RESEND_CODE_TIMER_DURATION);
  const [verificationError, setVerificationError] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (duration > 0) {
        setDuration(duration - 1);
      } else {
        setShowTimer(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [duration]);

  const handleResendClick = () => {
    setShowTimer(true);
    setDuration(RESEND_CODE_TIMER_DURATION);
  };

  const checkVerificationCode = (value: string) => {
    console.log(value);
    // Send the value to the backend for verification
    // Example error message:
    setVerificationError('Մուտքագրված կոդը այլևս վավեր չէ։ Անհրաժե՞շտ է վերաուղարկել նոր կոդ');
  };
  return (
    <>
      <FormTopLogo>Հաստատեք Ձեր էլ. հասցեն</FormTopLogo>
      <div className={`${TEXT_BASE_CLASSES} mt-[80px] mb-[60px]`}>
        Մեկանգամյա հաստատման կոդը ուղարկվել է
        <span className={'font-semibold'}> vsaratikyan@gmail.com </span> էլ. հասցեին (
        <span className={'font-semibold text-[#1376DD] cursor-pointer'}>Փոփոխել</span>)
      </div>
      <VerificationInput handleCodeCheck={checkVerificationCode} error={verificationError} />
      {showTimer ? (
        <div className={`mt-[60px]`}>
          <div className={`${TEXT_BASE_CLASSES}`}>
            Կոդը հնարավոր կլինի վերաուղարկել
            <span className={'text-[#F4B405] text-[20px] font-semibold'}>{` ${duration} `}</span>
            վայրկյանից
          </div>
        </div>
      ) : (
        <Button className={RESEND_BUTTON_CLASSES} onClick={handleResendClick}>
          Վերաուղարկել հաստատման կոդը
        </Button>
      )}
    </>
  );
};

export default CodeVerification;
