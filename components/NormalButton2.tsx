import React from "react";
import { DownloadIcon } from "@chakra-ui/icons";

import type { CustomButtonProps2 } from "./NormalButton2.type";

export const NormalButton2: React.FC<Partial<CustomButtonProps2>> = ({
  message,
}) => {
  return (
    <>
      <div>
        <DownloadIcon />
      </div>
      <div>{message}</div>
    </>
  );
};
