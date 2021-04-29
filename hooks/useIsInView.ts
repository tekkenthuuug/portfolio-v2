import { MutableRefObject, useEffect, useState } from 'react';

function useIsInView<TElementType extends HTMLElement>(
  elementRef: MutableRefObject<TElementType | null>,
  options: IntersectionObserverInit,
  callback?: (isInView: boolean) => any
) {
  const [isInView, setIsInView] = useState(false);

  const handleIntersection: IntersectionObserverCallback = entries => {
    setIsInView(entries[0].isIntersecting);
  };

  useEffect(() => callback?.(isInView), [isInView]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);

    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return isInView;
}

export default useIsInView;
