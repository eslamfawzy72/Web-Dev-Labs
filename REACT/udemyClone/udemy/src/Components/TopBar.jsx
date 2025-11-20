import React from 'react';

export default function TopBar() {
  return (
    <div
      id="topbar"
      style={{
        backgroundColor: "#ADD8E6",
        width: "100%",
        padding: "10px 0",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ margin: 0, color: "black" }}>
        <strong>Black Friday Sale!</strong> Sitewide deals from E£279.99. Ends Nov 28.
      </p>
    </div>
  );
}
