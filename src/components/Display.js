import React from "react";

export default function Display({ valueToLogOut }) {
  return (
    <div id="currentID" style={{ border: "1px solid purple", width: 200, height: 200 }}>
      <h1>{valueToLogOut}</h1>
    </div>
  );
}
