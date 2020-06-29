import { useEffect } from 'react';

export const useToggleBodyClass = (bool: boolean, [on, off]: [string, string]) => {
  useEffect(() => {
    document.body.classList.remove(bool ? off : on);
    document.body.classList.add(bool ? on : off);
  });
};

export default useToggleBodyClass;
