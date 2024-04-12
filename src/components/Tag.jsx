import React from "react";
import "./Tag.css";

const Tag = ({ tag, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#15d4c8" },
    CSS: { backgroundColor: "#15d4c8" },
    JavaScript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tag] : tagStyle.default}
      onClick={() => selectTag(tag)}
    >
      {tag}
    </button>
  );
};

export default Tag;
