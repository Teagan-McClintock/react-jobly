import { useState } from "react";


/**
 *  LoginForm allows user to enter login information. Flash errors if there
 *  are any.
 *
 *  Props:
 *    - onSubmit, a callback to return user inputs to LoginPage
 *    - errors,
 *    - defaultData, initially empty strings resembling the formData
 *
 *  States:
 *    formData, an object containing username & password data for user:
 *      {username: "", password: ""}
 *
 *  Renders:
 *    LoginPage -> LoginForm
 */
function LoginForm({ onSubmit, errors, defaultData }) {
  console.log("LoginForm rendered, props are onSubmit, errors, defaultData");
  console.log("onSubmit:", onSubmit);
  console.log("errors:", errors);
  console.log("defaultData", defaultData);

  const [formData, setFormData] = useState(defaultData);

  function handleChange(evt) {
    const { name, value } = evt.target.value;
    setFormData(currFormData => ({
      ...currFormData,
      [name]: value
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(formData);
  }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <label htmlFor="username"></label>
      <input
        id="username"
        required
        name="username"
        type="text"
        placeholder="Enter a username"
        value={formData.username}
        onChange={handleChange}
        />

      <label htmlFor="password"></label>
      <input
        id="password"
        required
        type="text"
        name="password"
        placeholder="Enter a password"
        value={formData.password}
        onChange={handleChange}
        />
      <button></button>
    </form>

  );


}


export default LoginForm;