import { MutableRefObject, useEffect, useRef, useState } from 'react';

function useIsInView<TElementType extends HTMLElement>(
  options: IntersectionObserverInit,
  callback?: (isInView: boolean) => any
): [MutableRefObject<TElementType | null>, boolean] {
  const elementRef = useRef<null | TElementType>(null);
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

  return [elementRef, isInView];
}

export default useIsInView;
