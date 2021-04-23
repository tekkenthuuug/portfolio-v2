import { useEffect, useRef } from 'react';

function usePrev<TValue>(value: TValue) {
  const prev = useRef<TValue>(value);

  useEffect(() => {
    prev.current = value;
  }, [value]);

  return prev.current;
}

export default usePrev;
