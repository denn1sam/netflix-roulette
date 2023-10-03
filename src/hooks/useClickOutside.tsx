import { useEffect } from 'react';

type UseClickOutside = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
  handler: (event: MouseEvent | TouchEvent) => void,
) => void;

export const useClickOutside: UseClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};