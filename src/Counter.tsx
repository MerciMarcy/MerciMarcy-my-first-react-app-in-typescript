import React, { useEffect, useRef, useState } from 'react';

// type MySetStateAction = number | ((prevState: number) => number);
// type Dispatch = (value: MySetStateAction) => void;

// useEffectの第二引数
/*
 * array: Array<number> = [1, 2, 3];
 * const readonlyArray: ReadonlyArray<number> = [1, 2, 3];
 * array[0] = 10;
 * readonlyArray[0] = 10;
 */

const Counter: React.FC<{}> = () => {
  const initialValue: any = 0;
  const [value, setValue] = useState<number>(initialValue);

  const increment = () => {
    // setValue(value + 1);
    setValue((prevState) => prevState + 1);
  };
  const decrement = () => {
    // setValue(value - 1);
    setValue((prevState) => prevState - 1);
  };

  const renderTimes = useRef<number>(0);
  useEffect(() => {
    // console.log('render was done.');
    renderTimes.current = renderTimes.current + 1;
  });

  const ref = useRef<HTMLInputElement>(null!);   // Non-Null Assertion Operator

  const forcusInput = () => {
    // const current = ref.current;
    // if (current != null) current.focus();
    // ref.current?.focus();   // Optional Chaining
    ref.current.focus();
  };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times!</div>
      <br />
      <input ref={ref} type="text" />
      <button onClick={forcusInput}>Click me!</button>
    </div>
  );
};

export default Counter;
