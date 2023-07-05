import React from "react";
import './Head.css'

const Head = ({user}) => {

  return <header>
    {user.email}
  </header>;
};

export default Head;
