// React
import { FunctionComponent, useEffect, useState } from 'react';
// Framer Motion
import { motion } from 'framer-motion';
// Interfaces
import { LoaderProps } from '@/interfaces/index';
// Context
import { useTheme } from '@/contexts/ThemeContext';

export const Spinner: FunctionComponent<any> = (props: LoaderProps) => {
  const { theme } = useTheme();
  const { width = 12, height = 12, className = "", spinnerColor, spinnerBgColor } = props;
  const SpinnerColor = spinnerColor || (theme === "dark" ? "#81e6d9" : "#1e40af");
  const SpinnerBgColor = spinnerBgColor || (theme === "dark" ? "#7a7f86" : "#e5e7eb");

  return (
    <div
      className={`loader ease-linear rounded-full border-4 border-t-4 ${className} h-${height} w-${width} mb-4`}
      style={{
        borderColor: SpinnerBgColor,
        borderTopColor: SpinnerColor
      }}
    ></div>
  )
}

const Loader: FunctionComponent<any> = (props: LoaderProps) => {
  const { width = 12, height = 12, spinnerColor, spinnerBgColor, title, text, delay = 1000} = props;
  const [render, setRender] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setTimeout(() => {
      if (isMounted) setRender(true);
    }, delay);

    return () => { isMounted = false };
  }, [])

  return (
    render === true && <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
      <Spinner width={width} height={height} spinnerColor={spinnerColor} spinnerBgColor={spinnerBgColor} />
      <div className="min-w-max">
        <h2 className="inline-block text-center text-white text-xl font-semibold mr-1">{title}</h2>
        {[0,1,2].map((i: number) => {
          return <motion.div key={i} animate={{ scale: [0,1,1.1,1] }} transition={{ delay: i*100, duration: 0.6 }} className={`inline-block animate-ping mr-1 h-0.5 w-0.5 rounded-full bg-white opacity-80`}></motion.div>
        })}
      </div>
      <p className="w-1/3 text-center text-white">{text}</p>
    </div>
  )
}

export default Loader
