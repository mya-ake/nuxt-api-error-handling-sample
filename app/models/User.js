export class User {
  constructor({ id = null, name = null, bio = null, iconUrl = null } = {}) {
    this.id = id;
    this.name = name;
    this.bio = bio;
    this.iconUrl = iconUrl;
  }
}
