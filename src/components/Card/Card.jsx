import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import './Card.css'

const Card = () => {

  const {user, setUserData} = useContext(UserContext)

  return <footer>
    <section className="userinfo">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.age}</p>
    </section>

    <section className="userinfo">
      <p>Name</p>
      <p>Email</p>
      <p>Age</p>
    </section>

    <section className="userphoto">
      <img src={user.url} alt="userphoto" />
    </section>
  </footer>;
};

export default Card;
