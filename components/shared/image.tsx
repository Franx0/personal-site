// React
import { FunctionComponent, useState, useEffect } from 'react';
// Types
import { ImageProps } from '@/interfaces/index';


const Image: FunctionComponent<any> = (props: ImageProps) => {
  const { className, style, src, defaultSrc, alt, width="100", height="100"} = props;
  const defaultSrcObject = { src: (src || '/media.jpg'), blurred: true };
  const [currentSrc, setCurrentSrc] = useState(defaultSrcObject);

  useEffect(() => {
    if(src) setCurrentSrc({ src: src, blurred: false });
  }, [src]);

  const handleError = (e) => {
    setCurrentSrc(defaultSrcObject);
  };

  return (
    <img
      onError={(e) => handleError(e)}
      width={width}
      height={height}
      style={ currentSrc.blurred ? {...style, filter: 'blur(0.5rem)' } : style }
      className={className}
      alt={alt} src={currentSrc.src}
      loading="lazy"/>
  )
}

export default Image
