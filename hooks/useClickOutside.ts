import { useCallback, useEffect, useRef } from 'react';

function useClickOutside<TElementType extends HTMLElement>(
  callback: () => any
) {
  const ref = useRef<null | TElementType>(null);

  const handleClick = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (ref.current) {
        if (!ref.current.contains(e.target as Node)) callback();
      }
    },
    [callback, ref]
  );

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [handleClick]);

  return ref;
}

export default useClickOutside;
