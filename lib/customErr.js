export class CustomErr extends Error {
  constructor(msg, status) {
    super(msg);
    this.statusCode = status;
  }
}

export class ServerErr extends CustomErr {
  constructor(msg, status) {
    super(msg, status);
    this.statusCode = status || 500;
    this.msg = msg || "server error";
  }
}
