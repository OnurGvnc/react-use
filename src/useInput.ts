let { useState, useCallback } = require('react');

interface InputValue<T> {
  value: T;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => undefined;
  // onChange: (e: React.BaseSyntheticEvent) => void;
  hasValue: boolean;
  clear: () => void;
}

export default function useInput<T>(initialValue: T): InputValue<T> {
  let [value, setValue] = useState(initialValue);
  let onChange = useCallback(function (event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }, []);

  const clear = useCallback(() => setValue(''), []);

  return {
    value,
    onChange,
    clear,
    hasValue: value !== undefined && value !== null && value.trim() !== '',
  };
}

/*
https://github.com/kitze/react-hanger/blob/master/src/useInput.ts
https://github.com/rehooks/input-value/blob/master/index.js
*/
