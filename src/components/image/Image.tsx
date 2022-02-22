import { SyntheticEvent, useState } from 'react';
import { classNameGenerator } from 'utils/pureFunctions';
import { ropstenImage } from 'services/web3/config';

interface ImageProps {
  src?: string;
  alt: string;
  className: string;
  lazy?: boolean;
}

export const Image = ({ src, alt, className, lazy = true }: ImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [attemptedFallback, setAttemptedFallback] = useState(false);

  const imageOnErrorHandler = (
    event: SyntheticEvent<HTMLImageElement, Event>
  ) => {
    if (attemptedFallback) {
      return;
    }
    setAttemptedFallback(true);
    event.currentTarget.src = ropstenImage;
    event.currentTarget.onerror = null;
  };

  return (
    <img
      src={src ? src : ropstenImage}
      alt={loaded ? alt : ''}
      className={`${className} ${classNameGenerator({
        'animate-pulse': !loaded,
      })}`}
      onLoad={() => setLoaded(true)}
      onError={imageOnErrorHandler}
      loading={lazy ? 'lazy' : 'eager'}
    />
  );
};
