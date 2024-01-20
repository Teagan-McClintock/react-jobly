
/**
 *  Homepage shows slogan.
 *
 *  Props: none
 *
 *  States: none
 *
 *  Renders:
 *    RoutesList -> Homepage
 */

function Homepage() {
  console.log("Homepage rendered, no props");

  return (
    <div className="Homepage">
      <h2>Jobly!</h2>
      <p>All the jobs in one convenient place</p>
    </div>
  );

}

export default Homepage;