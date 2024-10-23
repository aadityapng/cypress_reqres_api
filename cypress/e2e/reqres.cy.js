import ReqresAPI from "../page-objects/reqresAPI.js";

describe("Reqres API Testing", () => {
  it("List users - should return list of users", () => {
    ReqresAPI.getListUsers().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("data");
      expect(response.body.data).to.be.an("array");
    });
  });

  it("Single user - should return single user data", () => {
    ReqresAPI.getSingleUser(2).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.property("id", 2);
    });
  });

  it("Single user not found - should return 404", () => {
    ReqresAPI.getSingleUserNotFound(23).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it("List resource - should return list of resources", () => {
    ReqresAPI.getListResource().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("data");
      expect(response.body.data).to.be.an("array");
    });
  });

  it("Single resource - should return single resource data", () => {
    ReqresAPI.getSingleResource(2).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.property("id", 2);
    });
  });

  it("Single resource not found - should return 404", () => {
    ReqresAPI.getSingleResourceNotFound(23).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it("Create - should create new user", () => {
    const userData = {
      name: "morpheus",
      job: "leader",
    };
    ReqresAPI.createUser(userData).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("name", userData.name);
      expect(response.body).to.have.property("job", userData.job);
      expect(response.body).to.have.property("id");
    });
  });

  it("Update (PUT) - should update user data", () => {
    const userData = {
      name: "morpheus updated",
      job: "zion resident",
    };
    ReqresAPI.updateUserPut(2, userData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("name", userData.name);
      expect(response.body).to.have.property("job", userData.job);
    });
  });

  it("Update (PATCH) - should update user data partially", () => {
    const userData = {
      name: "morpheus patched",
    };
    ReqresAPI.updateUserPatch(2, userData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("name", userData.name);
    });
  });

  it("Delete - should delete user", () => {
    ReqresAPI.deleteUser(2).then((response) => {
      expect(response.status).to.eq(204);
    });
  });

  it("Register successful - should register new user", () => {
    const userData = {
      email: "eve.holt@reqres.in",
      password: "pistol",
    };
    ReqresAPI.registerSuccessful(userData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("token");
    });
  });

  it("Register unsuccessful - should fail to register", () => {
    const userData = {
      email: "sydney@fife",
    };
    ReqresAPI.registerUnsuccessful(userData).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("error");
    });
  });

  it("Login successful - should login user", () => {
    const userData = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };
    ReqresAPI.loginSuccessful(userData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("token");
    });
  });

  it("Login unsuccessful - should fail to login", () => {
    const userData = {
      email: "peter@klaven",
    };
    ReqresAPI.loginUnsuccessful(userData).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("error");
    });
  });

  it("Delayed response - should return delayed response", () => {
    ReqresAPI.getDelayedResponse().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("data");
      expect(response.body.data).to.be.an("array");
    });
  });
});
