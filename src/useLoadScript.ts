import { useEffect, useState } from 'react';

type UseScript = { startLoading: boolean; src: string };

const useLoadScript = ({ startLoading, src }: UseScript) => {
  const [state, setState] = useState<{
    ready: boolean;
    error: string | null | Event;
  }>({
    ready: false,
    error: null,
  });

  useEffect(() => {
    if (startLoading) {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => setState({ ready: true, error: null });
      script.onerror = (error) => setState({ ready: false, error });
      document.body.appendChild(script);
    }
  }, [src, startLoading]);

  return state;
};

export default useLoadScript;
