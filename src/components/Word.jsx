import React from "react";

function Word({ word, className = "" }) {
  return <span className={`${className} py-1 px-2 text-lg`}>{word}</span>;
}

export default Word;
