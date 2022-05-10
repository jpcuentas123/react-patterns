import React from "react";
import type { FC, ReactNode } from "react";

interface CheckboxProps {
  children: ReactNode;
}

const Checkbox: FC<CheckboxProps> = ({ children }) => {
  return <div>{children}</div>;
};

function CompoundComponent() {
  return <Checkbox>Compound Component</Checkbox>;
}

export default CompoundComponent;
