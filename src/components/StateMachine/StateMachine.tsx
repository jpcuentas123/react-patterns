import React, { useReducer, useState } from "react";
import "./App.css";

const initialSatate = {
  state: "NOT_LOADED",
};

function reducer({ state }: typeof initialSatate): { state: string } {
  switch (state) {
    case "NOT_LOADED":
      return { state: "LOADING" };
    case "LOADING":
      return { state: "LOADED" };
    default:
      return { state: "NOT_LOADED" };
  }
}

interface ButtonProps {
  color: string;
  underline: boolean;
  increment: number;
}

const Button: React.ElementType<ButtonProps> = ({ color }) => {
  const [state, dispatch] = useReducer(reducer, initialSatate);
  return (
    <div>
      <div style={{ color: color }} onClick={() => dispatch()}>
        Load state: {state.state}
      </div>
    </div>
  );
};

function StateMachine() {
  const props = (underline?: boolean | null, increment?: number | null) => {
    return {
      underline: underline || true,
      increment: increment || 1,
    };
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Button color="blue" {...props(false, 2)} />
        </p>
      </header>
    </div>
  );
}

export default StateMachine;
