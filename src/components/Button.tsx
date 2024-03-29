import { useState } from 'react';

function PrimaryButton({
  text,
  onClick,
  className,
  textClassName,
  hoverBgColor = 'hover:bg-light-dark',
  bgColor = 'bg-light-primary',
  type = 'button',
  startIcon,
  endIcon,
  isOrginalPadding = true,
  customHeightWidthTailWind,
  disabled,
}: {
  text: string;
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
        disabled ? 'bg-[#7a9ed6] hover:bg-[#7a9ed6] ' : ''
      }
       flex  cursor-pointer items-center justify-center rounded-md ${
         isOrginalPadding ? 'px-10 py-3' : ''
       }
      ${customHeightWidthTailWind}
      transition-colors duration-300 ease-in ${bgColor} ${hoverBgColor}`}
    >
      {startIcon && <div className='mr-2'>{startIcon}</div>}

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
  textHoverClassName = 'text-light-primary',
  bgHoverColor = 'hover:bg-light-hoverPrimary',
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
      } border-light-primary flex cursor-pointer items-center justify-center rounded-md border transition-colors duration-200 ease-in ${bgHoverColor} px-10 py-3 `}
    >
      {rightIcon && rightIcon}
      <p
        className={`${
          textClassName || ''
        } font-lexend-deca text-light-primary text-base font-semibold leading-5 tracking-[0.15px] ${
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
