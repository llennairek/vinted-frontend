import React from "react";

function Button({ text, className, handleToken, setUserConnected }) {
  const handleClick = () => {
    if (handleToken) {
      setUserConnected({});
      alert("Vous êtes maintenant déconnecté");
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
