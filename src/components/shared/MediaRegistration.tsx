import Button from './Button';

// icons
import EmailIcon from '../../assets/images/email_icon.svg';
// import PhoneIcon from '../../assets/images/phone_icon.svg';
import GmailIcon from '../../assets/images/gmail.svg';
import FbIcon from '../../assets/images/fb_icon.svg';

const MEDIA_REGISTRATION_BUTTONS = [
  // {
  //   key: 'phone',
  //   label: 'Հեռախոսահամարով',
  //   icon: PhoneIcon
  // },
  {
    key: 'email',
    label: 'Էլ. հասցեով',
    icon: EmailIcon
  },
  {
    key: 'google',
    label: 'Google Account-ով',
    icon: GmailIcon
  },
  {
    key: 'facebook',
    label: 'Facebook-ով',
    icon: FbIcon
  }
];

const MediaRegistration = () => {
  return (
    <>
      <div className="mx-auto mt-[140px] mb-[40px]">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-[70px] md:w-[140px] h-[1px] bg-[#8080804D]"></div>
          <p className=" font-mardoto text-[14px]">Կամ գրանցվեք</p>
          <div className="w-[70px] md:w-[140px] h-[1px] bg-[#8080804D]"></div>
        </div>
      </div>

      <div className={'flex flex-row justify-center items-center md:flex-col'}>
        {MEDIA_REGISTRATION_BUTTONS.map((item) => (
          <Button
            key={item.key}
            id="btn"
            rounded
            className="mx-auto my-[8px] sm:mx-[15px] sm:px-0 sm:py-0 md:px-3 md:py-1.5 md:mx-0 h-[48px] sm:border-0 md:border md:border-[#14427299] md:bg-[#EBF3FB] md:w-[340px] md:pl-[40px]">
            <div className="flex space-x-4 items-center">
              <img className={'w-[34px] h-[34px]'} src={item.icon} alt="" />
              <p
                className={
                  'sm:hidden md:block font-mardoto font-normal text-[14px] text-[#101B28]'
                }>
                {item.label}
              </p>
            </div>
          </Button>
        ))}
      </div>

      <div className={'font-mardoto text-[14px] text-[#101B28CC] mt-[32px] text-center'}>
        Արդեն ունե ՞ք գրանցված հաշիվ․{' '}
        <span className={'text-[#1376DD] font-bold cursor-pointer'}>Մուտք գործել</span>
      </div>
    </>
  );
};

export default MediaRegistration;
