import React, {useContext} from "react";
import { UserContext } from "../../context/userContext";
import './Form.css'

const Form = () => {

  const {user, setUserData} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserData({
      name: e.target.name.value,
      email: e.target.email.value,
      url: e.target.url.value,
      age: e.target.age.value
    })
  }

  return <main>
    <form className="userdata-form" action="#" onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" name="name"/>
      <input type="email" placeholder="Email" name="email"/>
      <input type="url" placeholder="Profile photo" name="url"/>
      <input type="number" placeholder="Age" name="age"/>
      <button type="submit">SUBMIT</button>
    </form>
  </main>
};

export default Form;
