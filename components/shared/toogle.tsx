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
      <div className={`${width} ${height} flex items-center rounded-full p-1 ${isActive ? 'bg-blue' : 'bg-gray-300'}`} onClick={() => handleClick()}>
        <div className={`${iconClassName} rounded-full shadow-md transform duration-300 ease-in-out`}>
          {icon}
        </div>
      </div>
    </div>
  )
}

export default Toogle
