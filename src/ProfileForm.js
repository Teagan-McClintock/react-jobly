import { useState, useContext } from "react";
import userContext from "./userContext";

/** ProfileForm displays a form to edit user's profile. Will be pre-populated
 * with user's current info. Username is locked.
 *
 * Props:
 *  - onSubmit, a callback to update the user data
 *  - errors, an array of string messages
 *
 * States:
 *  formData, an object {username, firstName, lastName, email}
 *
 * Renders:
 *  ProfilePage -> ProfileForm
 */

function ProfileForm( { onSubmit, errors }) {
  console.log("ProfileForm rendered, took onSubmit and errors");
  console.log("onSubmit:", onSubmit);
  console.log("errors:", errors);

  const { loggedInUser } = useContext(userContext);

  const [formData, setFormData] = useState({
    username: loggedInUser.username,
    firstName: loggedInUser.firstName,
    lastName: loggedInUser.lastName,
    email: loggedInUser.email
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
   *  to ProfilePage for processing.
   */
  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(formData);
  }


  return (
    <form classname="ProfileForm" onSubmit={handleSubmit}>
      {errors && errors.map(error => <p key={error}>{error}</p>)}

      <label htmlFor="username">Username: </label>
      <input
        id="username"
        disabled
        name="username"
        type="text"
        placeholder="Enter a username"
        value={formData.username}
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

      <button>Save Changes</button>
    </form>
  )

}

export default ProfileForm;
