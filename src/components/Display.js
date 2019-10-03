import React from "react";

export default function Display({ valueToLogOut }) {
  return (
    <div id="currentID">
      <h4>{valueToLogOut}</h4>
    </div>
  );
}
