import React, { useState } from "react";
import { StyledContentEditable } from "../../Styles";
export default function Button() {
  const [html, setHtml] = useState("<button>Button</button>");
  const handleChange = (e) => {
    setHtml(e.target.value);
  };
  return (
    <StyledContentEditable
      html={html}
      disabled={false}
      onChange={handleChange}
    />
  );
}
