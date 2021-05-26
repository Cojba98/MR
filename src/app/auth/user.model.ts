export class User {
  constructor(public id: string, public email: string, private ttoken: string, private tokenExpirationDate: Date) {

  }

  get token() {
    if (!this.tokenExpirationDate || this.tokenExpirationDate <= new Date()) {
      return null;
    }
    return this.ttoken;
  }
}
