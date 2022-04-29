import React, { useState } from "react";
import "./App.css";

interface ButtonProps {
  color: string;
  underline: boolean;
  increment: number;
}

const Button: React.ElementType<ButtonProps> = ({
  color,
  underline,
  increment,
}) => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div
        style={{ color: color }}
        onClick={() => setCounter((c) => c + increment)}
      >
        Counter: {counter}
      </div>
    </div>
  );
};

function ComponentPropsDestructuring() {
  const props = (underline?: boolean | null, increment?: number | null) => {
    return {
      underline: underline || true,
      increment: increment || 1,
    };
  };

  // * JSX Code -> React.createElement('Button', {
  // *   prop1: 'red',
  // *   prop2: true, })

  // This is equivalent
  // * <Button color="red" underline={true} increment={1} />
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Button color="blue" {...props(false, 2)} />
          <Button color="red" {...props()} />
        </p>
      </header>
    </div>
  );
}

export default ComponentPropsDestructuring;
