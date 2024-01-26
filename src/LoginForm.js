import { useState } from "react";


/**
 *  LoginForm allows user to enter login information. Flash errors if there
 *  are any.
 *
 *  Props:
 *    - onSubmit, a callback to return user inputs to LoginPage
 *    - errors, an array of string messages
 *
 *  States:
 *    formData, an object containing username & password data for user:
 *      {username: "", password: ""}
 *
 *  Renders:
 *    LoginPage -> LoginForm
 */
function LoginForm({ onSubmit, errors }) {
  console.log("LoginForm rendered, props are onSubmit, errors");
  // console.log("onSubmit:", onSubmit);
  // console.log("errors:", errors);

  const [formData, setFormData] = useState({username: "", password: ""});

  /**
   *  When user changes a text input of one of the form fields, updates value
   *  for that key in formData state.
   */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(currFormData => ({
      ...currFormData,
      [name]: value
    }));
  }

  /**
   *  When user submits form, prevents default behaviour and sends formData
   *  to LoginPage for processing.
   */
  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(formData);
  }


  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      {errors && <p>{errors}</p>}

      <label htmlFor="username">Username: </label>
      <input
        id="username"
        required
        name="username"
        type="text"
        placeholder="Enter a username"
        value={formData.username}
        onChange={handleChange}
      />

      <label htmlFor="password">Password: </label>
      <input
        id="password"
        required
        type="password"
        name="password"
        placeholder="Enter a password"
        value={formData.password}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>

  );


}


export default LoginForm;