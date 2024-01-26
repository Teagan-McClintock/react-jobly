import { useState } from "react";


/**
 *  SignupForm takes in user-provided info to be used for signup. Flash errors
 *  if there are any.
 *
 *  Props:
 *    - onSubmit, a callback to return user inputs to LoginPage
 *    - errors, an array of string messages
 *
 *  States:
 *    formData, an object containing username, first name, last name, password,
 *        and email for user:
 *        {username: "", firstName: "", lastName: "", password: "", email: ""}
 *
 *  Renders:
 *    SignupPage -> SignupForm
 */
function SignupForm({ onSubmit, errors }) {
  console.log("Signup page rendered, took onSubmit and errors");
  console.log("onSubmit:", onSubmit);
  console.log("errors:", errors);

  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    email: ""
  });

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
   *  to SignupPage for processing.
   */

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(formData);
  }

  // Ask about: errors as array vs mapping when rendering form

  return (
    <form className="SignupForm" onSubmit={handleSubmit}>
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

      <label htmlFor="firstName">First Name: </label>
      <input
        id="firstName"
        required
        type="text"
        name="firstName"
        placeholder="Enter a first name"
        value={formData.firstName}
        onChange={handleChange}
      />

      <label htmlFor="lastName">Last Name: </label>
      <input
        id="lasttName"
        required
        type="text"
        name="lastName"
        placeholder="Enter a last name"
        value={formData.lastName}
        onChange={handleChange}
      />

      <label htmlFor="email">Email: </label>
      <input
        id="email"
        required
        type="email"
        name="email"
        placeholder="Enter an email address"
        value={formData.email}
        onChange={handleChange}
      />

      <button>Submit</button>
    </form>
  )

}

export default SignupForm;