import React from "react";

const Jumbotron = ({ children }) => (
  <div style={{ height: 'auto', clear: "both" }} className="jumbotron">
    {children}
  </div>
);

export default Jumbotron;
