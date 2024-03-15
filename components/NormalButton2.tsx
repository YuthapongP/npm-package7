import React from "react";
import type { CustomButtonProps2 } from "./NormalButton2.type";

export const NormalButton2: React.FC<Partial<CustomButtonProps2>> = ({
  children,
}) => {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
};
