import User from "../models/User";
export default function clear() {
  User.syncIndexes()
}
