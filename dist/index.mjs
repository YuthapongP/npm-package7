// components/NormalButton.tsx
import React from "react";
var NormalButton = function(param) {
    var children = param.children;
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", null, children));
};
// components/NormalButton2.tsx
import React2 from "react";
import { DownloadIcon } from "@chakra-ui/icons";
var NormalButton2 = function(param) {
    var message = param.message;
    return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement(DownloadIcon, null)), /* @__PURE__ */ React2.createElement("div", null, message));
};
export { NormalButton, NormalButton2 };
