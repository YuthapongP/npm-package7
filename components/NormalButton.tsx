import React from "react";

import type { CustomButtonProps } from "./NormalButton.type";

export const NormalButton: React.FC<Partial<CustomButtonProps>> = ({
  children,
}) => {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
};
