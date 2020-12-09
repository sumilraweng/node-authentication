class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.created = Date.now();
  }
}

module.exports = { User };
