import { MutableRefObject, useEffect, useState } from 'react';

function useIsInView<TElementType extends HTMLElement>(
  elementRef: MutableRefObject<TElementType | null>,
  options: IntersectionObserverInit,
  onInViewChange?: (isInView: boolean) => any
) {
  const [isInView, setIsInView] = useState(false);

  const handleIntersection: IntersectionObserverCallback = entries => {
    setIsInView(entries[0].isIntersecting);
  };

  useEffect(() => onInViewChange?.(isInView), [isInView]);

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
