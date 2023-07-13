import React, { useState, useEffect } from "react";
import "../blog.css";
import Markdown from "markdown-to-jsx";
import { Header, Text } from "../styles";

export default function Blog1() {
  const file_name = "blog1.md";
  const [post, setPost] = useState(""); //to store contents of the md file
  useEffect(() => {
    import(`./${file_name}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res));
      })
      .catch((err) => console.log(err));
  });

  return (
    <div id="blogbox" className="text-white m-12 lg:m-36">
      <Markdown
        options={{
          overrides: { h1: { component: Header }, Text: { component: Text } },
        }}
      >
        {post}
      </Markdown>
    </div>
  );
}
