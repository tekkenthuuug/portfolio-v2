import { MutableRefObject, useEffect } from 'react';
import useIsInView from './useIsInView';

interface IParallaxConfig {
  multiplier: number;
}

function useParallax<TElementType extends HTMLElement>(
  elementRef: MutableRefObject<TElementType | null>,
  { multiplier }: IParallaxConfig
) {
  const isInView = useIsInView(elementRef, { threshold: 0 });

  useEffect(() => {
    if (!elementRef.current) return;

    const handleScroll = () => {
      elementRef.current!.style.top = `${
        document.documentElement.scrollTop * multiplier
      }px`;
    };

    if (isInView) {
      document.addEventListener('scroll', handleScroll);
    } else {
      document.removeEventListener('scroll', handleScroll);
    }
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isInView, elementRef.current]);
}

export default useParallax;
