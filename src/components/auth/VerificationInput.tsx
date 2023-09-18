import className from 'classnames';
import { FC, useRef, ClipboardEvent, KeyboardEvent, FormEvent, RefObject } from 'react';
// import { ClipboardEvent } from '../../interface/clipboard.interface';
const VERIFICATION_INPUT_BASE_CLASSES = className(
  'w-[45px] md:min-w-[60px] h-[45px] md:min-h-[60px] outline-none text-center font-mardoto text-[20px] border rounded-lg border-[#667085] bg-[#fff]'
);

const ERROR_TEXT_BASE_CLASSES = className(
  'text-[10px] mt-[8px] font-mardoto text-[#F34635] font-normal'
);
interface IVerificationInputProps {
  error: string;
  handleCodeCheck: (value: string) => void;
}
type KeyHandler = (e: KeyboardEvent<HTMLInputElement>, index: number) => void;

const VerificationInput: FC<IVerificationInputProps> = ({ error, handleCodeCheck }) => {
  const inputs: (HTMLInputElement | null)[] = Array.from({ length: 6 });
  const inputRefs: any = inputs.map(() => useRef(null));

  const KEY_HANDLERS: { [key: number]: KeyHandler } = {
    [8]: (e, index) => handleBackspace(e, index),
    [37]: (e, index) => handleArrowLeft(e, index),
    [39]: (e, index) => handleArrowRight(e, index)
  };

  const handleInput = (e: FormEvent<HTMLInputElement> | any, index: number) => {
    const { value } = e.target;

    if (value && index < inputs.length - 1) {
      if (inputRefs[index]?.current && inputRefs[index + 1]?.current) {
        inputRefs[index].current.value = value;
        inputRefs[index + 1].current.focus();
      }
    }

    const values = getInputValues();

    if (values.length !== inputRefs.length) return;

    handleCodeCheck(values);
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const paste = e.clipboardData.getData('text');
    const pasteValues = paste.split('').slice(0, inputs.length);

    pasteValues.forEach((value, index) => {
      inputRefs[index].current.value = value;
    });
  };

  const handleBackspace: KeyHandler = (e, index) => {
    inputRefs[index].current.value = '';

    if (index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleArrowLeft: KeyHandler = (e, index) => {
    if (index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleArrowRight: KeyHandler = (e, index) => {
    if (index < inputs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown: KeyHandler = (e, index) => {
    const action = KEY_HANDLERS[e.keyCode];

    if (action) {
      action(e, index);
    }
  };

  const getInputValues = () => {
    return inputRefs
      .map((item: RefObject<HTMLInputElement> | any) => item.current.value)
      .filter((item: any) => item)
      .join('');
  };

  return (
    <form>
      <div
        className={'w-[300px] md:min-w-[424px] lg:min-w-[415px] flex items-center justify-between'}>
        {inputs.map((_, index) => (
          <input
            key={index}
            ref={inputRefs[index]}
            type="tel"
            maxLength={1}
            pattern="[0-9]"
            className={`${VERIFICATION_INPUT_BASE_CLASSES} ${error ? 'border-[#F34635]' : ''}`}
            onInput={(e) => handleInput(e, index)}
            onPaste={handlePaste}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
      {error && <div className={ERROR_TEXT_BASE_CLASSES}>{error}</div>}
    </form>
  );
};

export default VerificationInput;
