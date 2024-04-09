import { useState } from 'react';

function PrimaryButton({
  text,
  onClick,
  className,
  textClassName,
  hoverBgColor = 'hover:bg-slate-600',
  bgColor = 'bg-[#ff0000d7]',
  type = 'button',
  startIcon,
  endIcon,
  isOrginalPadding = true,
  customHeightWidthTailWind,
  disabled,
}: {
  text?: string;
  onClick?: () => void;
  className?: string;
  textClassName?: string;
  hoverBgColor?: string;
  bgColor?: string;
  type?: 'button' | 'submit' | 'reset';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  isOrginalPadding?: boolean;
  customHeightWidthTailWind?: string;
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className={`${className || ''} ${
        disabled ? 'bg-[#ff0000d7] hover:bg-[#ff00005d] ' : ''
      }
       flex  cursor-pointer items-center justify-center rounded-md ${
         isOrginalPadding ? 'px-10 py-3' : ''
       }
      ${customHeightWidthTailWind}
      transition-colors duration-300 ease-in ${bgColor} ${hoverBgColor}`}
    >
      {startIcon && <div className='my-1'>{startIcon}</div>}

      <p
        className={`${
          textClassName || 'font-semibold'
        } font-lexend-deca leading-5 tracking-[0.15px] text-white`}
      >
        {text}
      </p>
      {endIcon && <div className='ml-2'>{endIcon}</div>}
    </button>
  );
}

function PrimaryOutlineButton({
  text,
  onClick,
  className,
  textClassName,
  textHoverClassName = 'text-[white]',
  bgHoverColor = 'hover:bg-slate-600',
  type = 'button',
  disabled,
  leftIcon,
  rightIcon,
}: {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  text: string;
  onClick?: () => void;
  className?: string;
  textClassName?: string;
  textHoverClassName?: string;
  bgHoverColor?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}) {
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      disabled={disabled}
      className={`${
        className || ''
      } flex cursor-pointer items-center justify-center rounded-md border border-[#ff0000d7] transition-colors duration-200 ease-in ${bgHoverColor} px-10 py-3 `}
    >
      {rightIcon && rightIcon}
      <p
        className={`${
          textClassName || ''
        } font-lexend-deca text-base font-semibold leading-5 tracking-[0.15px] text-[#ff0000d7] ${
          isHover && textHoverClassName
        }`}
      >
        {text}
      </p>
      {leftIcon && leftIcon}
    </button>
  );
}

export { PrimaryButton, PrimaryOutlineButton };
