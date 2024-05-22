import React, { useState } from "react";

export default function Accordian({ children, title, isExpand = false }) {
  const [expand, setExpand] = useState(isExpand);
  return (
    <div style={{ width: "500px", color: "#333", border: "1px solid #ddd" }}>
      <div
        style={{
          cursor: "pointer",
          padding: "15px",
          backgroundColor: "#f5f5f5",
        }}
        onClick={() => setExpand((expand) => !expand)}
      >
        <span>{title}</span>
      </div>
      {expand && <div style={{ padding: "15px" }}>{children}</div>}
    </div>
  );
}
