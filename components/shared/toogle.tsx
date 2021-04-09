// React
import { FunctionComponent, useState, useEffect } from 'react';
// Types
import { ToogleProps } from '@/interfaces/index';

const Toogle: FunctionComponent<any> = (props: ToogleProps) => {
  const [isActive, setIsActive] = useState(false);
  const { width = 16, height = 10, className = "", easeRange = 2, handleClick, active, icon, iconClassName = "bg-white" } = props;

  useEffect(() => {
    setIsActive(active);
  }, [active])

  return (
    <div className={`flex justify-between ${className}`}>
      <div className={`w-${width} h-${height} flex items-center rounded-full p-1 ${isActive ? 'bg-blue' : 'bg-gray-300'}`} onClick={() => handleClick()}>
        <div className={`${iconClassName} w-${+width/2} h-${+width/2} rounded-full shadow-md transform duration-300 ease-in-out ${isActive === true && 'translate-x-'+(Math.abs(+width - +easeRange))}`}>
          {icon}
        </div>
      </div>
    </div>
  )
}

export default Toogle
