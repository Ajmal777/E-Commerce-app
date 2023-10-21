import React from "react";
import "./style.css";
function Error({ error }) {
  return (
    <div className="error">
      <h1 className="error-code">{error.code}</h1>
      <p className="error-message">{error.message}</p>
      <p className="error-data">{error.response.data}</p>
    </div>
  );
}

export default Error;
