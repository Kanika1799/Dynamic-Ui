import React, { useState } from "react";
import { StyledContentEditable } from "../../Styles";

export default function Heading() {
  const [html, setHtml] = useState("<h1>Heading 1</h1>");
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
