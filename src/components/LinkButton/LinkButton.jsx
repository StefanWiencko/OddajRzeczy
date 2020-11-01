import React from "react";
import { Link } from "react-scroll";

function LinkButton({ text, to }) {
  return (
    <Link className="linkButton button" to={to} smooth={true} duration={500}>
      {text}
    </Link>
  );
}

export default LinkButton;
