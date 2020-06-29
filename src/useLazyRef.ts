import { useRef, MutableRefObject } from 'react';

const useLazyRef = <T>(initialValFunc: () => T) => {
  const ref: MutableRefObject<T | null> = useRef(null);
  if (ref.current === null) {
    ref.current = initialValFunc();
  }
  return ref;
};

export default useLazyRef;

/*
https://twitter.com/dan_abramov/status/1149120970856075264
https://github.com/vlopp/useLazyRef/blob/master/src/useLazyRef.ts
*/
