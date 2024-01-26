"use strict";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token = "";

  //*****ORIGINAL TOKEN BELOW*****
  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  //   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  //   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  static async request(endpoint, data = {}, method = "GET") {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    const headers = {
      authorization: `Bearer ${JoblyApi.token}`,
      'content-type': 'application/json',
    };

    url.search = (method === "GET")
      ? new URLSearchParams(data).toString()
      : "";

    // set to undefined since the body property cannot exist on a GET method
    const body = (method !== "GET")
      ? JSON.stringify(data)
      : undefined;

    const resp = await fetch(url, { method, body, headers });

    if (!resp.ok) {
      console.error("API Error:", resp.statusText, resp.status);
      const message = (await resp.json()).error.message;
      throw Array.isArray(message) ? message : [message];
    }

    return await resp.json();
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get information on all companies */

  static async getCompanies() {
    let res = await this.request(`companies`);
    return res.companies;
  }

  /** Get information on all jobs */

  static async getJobs() {
    let res = await this.request(`jobs`);
    return res.jobs;
  }

  /** Search jobs that contain searchTerm */

  static async searchJobs(searchTerm) {
    let res = await this.request(`jobs`, {title: searchTerm});
    return res.jobs;
  }

  /** Search companies that contain searchTerm */

  static async searchCompanies(searchTerm) {
    let res = await this.request(`companies`, {nameLike: searchTerm});
    return res.companies;
  }
  // take a look at the solution -- backend can handle one search function that
  // can take what it's searching as another arg

  /** Validate if user has an account, returning a token if validated and an
   * error object {message, status} if not (we think)
   * Takes an object {username, password} as an argument
   */

  static async signIn(userCredentials) {
    let res = await this.request(`auth/token`, userCredentials, "POST");
    return res.token || res.error;
  }

  /** Create a new user, returning a token if successful and an
   * error object {message, status} if not (we think)
   * Takes an object {username, password, firstName, lastName, email} as an
   * argument
   */

  static async signUp(userInfo) {
    let res = await this.request(`auth/register`, userInfo, "POST");
    return res.token || res.error;
  }

  /** Updates a user's data. Takes an object
   * {username, firstName, lastName, email} as an argument
   * Returns user object or error if no such user*/

  static async updateUser(userInfo) {
    let res = await this.request(
      `/users/${userInfo.username}`, userInfo, "PATCH");
    return res.user || res.error;
  }

  /** Gets a user's data. Takes a username (string) as an argument
   * Returns user object or error if no such user
  */

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }
}

export default JoblyApi;
