import React, { useState } from "react";
import { StyledContentEditable } from "../../Styles";

export default function Text() {
  const [html, setHtml] = useState("<span>Text</span>");
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
