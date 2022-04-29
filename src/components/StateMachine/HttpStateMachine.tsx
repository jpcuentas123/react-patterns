import React, { useEffect, useReducer, useState } from "react";

const initialSatate = {
  state: "NOT_LOADED",
};

enum LoadState {
  IDLE = "IDLE",
  LOADING = "LOADING",
  LOADED = "LOADED",
  ERROR = "ERROR",
}

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

const Button: React.ElementType = ({ onClick, state }) => {
  // const [state, dispatch] = useReducer(reducer, initialSatate);
  return (
    <div>
      <div onClick={onClick}>Load state: {state}</div>
    </div>
  );
};

// *
// * idle
// * loading
// * loaded
// * error

function HttpStateMachine() {
  const [state, setState] = useState<LoadState>(LoadState.IDLE);
  const getData = async () => {
    setState(LoadState.LOADING);
    setTimeout(() => {
      fetch("/data.json")
        .then((res) => {
          setState(LoadState.LOADED);
          return res.json();
        })
        .catch(() => {
          setState(LoadState.ERROR);
        });
    }, 2000);
  };
  return <Button onClick={() => getData()} state={state} />;
}

export default HttpStateMachine;
