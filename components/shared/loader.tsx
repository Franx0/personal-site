// React
import { FunctionComponent, useEffect, useContext, useState } from 'react';
// Interfaces
import { LoaderProps } from '@/interfaces/index';
// Context
import ThemeContext from '@/contexts/ThemeContext';

export const Spinner: FunctionComponent<any> = (props: LoaderProps) => {
  const { theme } = useContext(ThemeContext);
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
  const { width = 12, height = 12, spinnerColor, spinnerBgColor} = props;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
      <Spinner width={width} height={height} spinnerColor={spinnerColor} spinnerBgColor={spinnerBgColor} />
      <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
      <p className="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
    </div>
  )
}

export default Loader
