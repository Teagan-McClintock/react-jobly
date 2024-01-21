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
  // console.log("WANT TO SEE errors:", errors);

  const [formData, setFormData] = useState({username: "", password: ""});

  function handleChange(evt) {
    const { name, value } = evt.target;
    console.log("Name, value in handleChange", name, value);
    setFormData(currFormData => ({
      ...currFormData,
      [name]: value
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(formData);
  }

  // TODO: examine errors to see if their display works as anticipated

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      {errors && <p>{errors}</p>}
      {/* {errors && errors.map(error => <p key={}>{error}</p>)} */}
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
        type="text"
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