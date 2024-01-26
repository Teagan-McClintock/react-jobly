import ProfileForm from "./ProfileForm";

/**
 *  ProfilePage takes user inputs (from form) and updates their profile.
 *  Makes call to Jobly API to update stored user information.
 *
 *  Props: none
 *
 *  States:
 *    - isLoading, a boolean
 *    - userData, an object
 *        {username, firstname, lastname, email}
 *
 *  Renders:
 *    RoutesList -> ProfilePage -> ProfileForm
 *
 *  Authorization required: logged-in
 *
 */
function ProfilePage() {
  console.log("ProfilePage rendered, took no props");

}

export default ProfilePage;