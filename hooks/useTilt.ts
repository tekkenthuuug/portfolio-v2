import { MutableRefObject, useEffect } from 'react';

interface ITiltConfig {
  multiplierX: number;
  multiplierY: number;
  scale: number;
}

function useTilt<TElementType extends HTMLElement>(
  ref: MutableRefObject<TElementType | null>,
  { multiplierX, multiplierY, scale }: ITiltConfig
) {
  useEffect(() => {
    const handleMouseMoveOnCard = (e: MouseEvent) => {
      if (ref.current) {
        const onElementX = e.pageX - ref.current.offsetLeft;
        const onElementY = e.pageY - ref.current.offsetTop;

        const centerX = onElementX - ref.current.clientWidth / 2;
        const centerY = onElementY - ref.current.clientHeight / 2;

        const degX = (centerY / 100) * multiplierY;
        const degY = (-centerX / 100) * multiplierX;

        ref.current.style.transform = `scale(${scale}) perspective(1000px) rotateY(${degY}deg) rotateX(${degX}deg)`;
      }
    };

    const handleMouseLeave = () => {
      if (ref.current) {
        ref.current.style.transform = '';
      }
    };

    ref.current?.addEventListener('mousemove', handleMouseMoveOnCard);
    ref.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      ref.current?.removeEventListener('mousemove', handleMouseMoveOnCard);
      ref.current?.addEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
}

export default useTilt;
