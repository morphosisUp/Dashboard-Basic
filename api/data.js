import users from "../database/users.json";

export default function handler(request, response) {
  response.status(200).json(users);
}
