import { marked } from "marked";
import React, { useState, useEffect } from "react";

function Renderer({ filename }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(filename)
      .then((response) => response.text())
      .then((text) => {
        setContent(marked.parse(text));
      })
      .catch((error) => {
        return (
          <div dangerouslySetInnerHTML={{ __html: `Error: ${error}` }}></div>
        );
      });
  }, [filename]);

  return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
}

export default Renderer;
