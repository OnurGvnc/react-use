import { useCallback, useEffect, useState } from 'react';

export type TimeFormattingFunction = (date: Date) => string;

export const useClock = (
  timeFormattingFunction: TimeFormattingFunction = date =>
    date.toLocaleDateString()
) => {
  const getCurrentTime = useCallback(() => timeFormattingFunction(new Date()), [
    timeFormattingFunction,
  ]);
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const t = setInterval(() => setTime(getCurrentTime()), 1000);

    return () => clearInterval(t);
  }, [getCurrentTime]);

  return time;
};
