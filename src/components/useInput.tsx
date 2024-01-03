import { useState } from 'react';

export const UseInputs = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event: { target: { value: any } }) => {
    const {
      target: { value },
    } = event;
    setValue(value);
  };
  return { value, onChange };
};
