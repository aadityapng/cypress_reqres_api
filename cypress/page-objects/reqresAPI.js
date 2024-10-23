export default class ReqresAPI {
  static baseUrl = "https://reqres.in/api";

  // List users
  static getListUsers(page = 1) {
    return cy.request("GET", `${this.baseUrl}/users?page=${page}`);
  }

  // Single user
  static getSingleUser(userId) {
    return cy.request("GET", `${this.baseUrl}/users/${userId}`);
  }

  // Single user not found
  static getSingleUserNotFound(userId) {
    return cy.request({
      method: "GET",
      url: `${this.baseUrl}/users/${userId}`,
      failOnStatusCode: false,
    });
  }

  // List resource
  static getListResource() {
    return cy.request("GET", `${this.baseUrl}/unknown`);
  }

  // Single resource
  static getSingleResource(resourceId) {
    return cy.request("GET", `${this.baseUrl}/unknown/${resourceId}`);
  }

  // Single resource not found
  static getSingleResourceNotFound(resourceId) {
    return cy.request({
      method: "GET",
      url: `${this.baseUrl}/unknown/${resourceId}`,
      failOnStatusCode: false,
    });
  }

  // Create user
  static createUser(userData) {
    return cy.request("POST", `${this.baseUrl}/users`, userData);
  }

  // Update user (PUT)
  static updateUserPut(userId, userData) {
    return cy.request("PUT", `${this.baseUrl}/users/${userId}`, userData);
  }

  // Update user (PATCH)
  static updateUserPatch(userId, userData) {
    return cy.request("PATCH", `${this.baseUrl}/users/${userId}`, userData);
  }

  // Delete user
  static deleteUser(userId) {
    return cy.request("DELETE", `${this.baseUrl}/users/${userId}`);
  }

  // Register successful
  static registerSuccessful(userData) {
    return cy.request("POST", `${this.baseUrl}/register`, userData);
  }

  // Register unsuccessful
  static registerUnsuccessful(userData) {
    return cy.request({
      method: "POST",
      url: `${this.baseUrl}/register`,
      body: userData,
      failOnStatusCode: false,
    });
  }

  // Login successful
  static loginSuccessful(userData) {
    return cy.request("POST", `${this.baseUrl}/login`, userData);
  }

  // Login unsuccessful
  static loginUnsuccessful(userData) {
    return cy.request({
      method: "POST",
      url: `${this.baseUrl}/login`,
      body: userData,
      failOnStatusCode: false,
    });
  }

  // Delayed response
  static getDelayedResponse(delay = 3) {
    return cy.request("GET", `${this.baseUrl}/users?delay=${delay}`);
  }
}
