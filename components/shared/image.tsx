// React
import { FunctionComponent } from 'react';
// Types
import { ImageProps } from '@/interfaces/index';

const Image: FunctionComponent<any> = (props: ImageProps) => {
  const { className, style, src, defaultSrc, alt, width="100", height="100"} = props;

  const handleError = (e) => {
    console.log(e);
  };

  return (
    <img
      onError={(e) => handleError(e)}
      width={width}
      height={height}
      style={style}
      className={className}
      alt={alt} src={src}
      loading="lazy"/>
  )
}

export default Image
