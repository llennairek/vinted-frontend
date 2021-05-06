import React from "react";

function Button({ text, className, handleToken }) {
  const handleClick = () => {
    if (handleToken) {
      handleToken(null);
    }
  };
  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
