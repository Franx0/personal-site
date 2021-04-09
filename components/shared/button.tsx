// React
import { FunctionComponent } from 'react';
// Types
import { ButtonProps } from '@/interfaces/index';

const ButtonStyled: FunctionComponent<any> = (props: ButtonProps) => {
  const { className = "", color = "", textColor = "", type = "default", text, children, handleClick } = {...props};
  const HasColor = color ? `bg-${color} hover:bg-${color}` : color;
  const HasTextColor = textColor ? `text-${textColor}` : textColor;
  let Classes = className;

  if(type === "default") Classes = Classes + " py-1 px-3 rounded-full";
  if(type === "circle") Classes = Classes + " arrow-circle-left cursor-pointer block no-underline md:border-none";

  return (
    <button className={`${Classes} ${HasColor} ${HasTextColor} font-bold`} onClick={handleClick ? () => handleClick() : undefined}>{text || children}</button>
  )
}

export default ButtonStyled
