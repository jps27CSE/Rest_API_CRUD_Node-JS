let user = [];
const { v4: uuidv4 } = require("uuid");

exports.GetUsers = (req, res) => {
  res.send(user);
};

exports.PostUser = (req, res) => {
  const users = req.body;
  const userID = uuidv4();
  const userWithID = { ...users, id: userID };
  user.push(userWithID);
  res.send(
    `Registered with First Name : ${userWithID.firstName} Last Name : ${userWithID.lastName} Age : ${userWithID.Age}`
  );
};

exports.GetSpecificUser = (req, res) => {
  const { id } = req.params;
  const foundUser = user.find((user) => user.id === id);
  res.send(foundUser);
};

exports.DeleteUser = (req, res) => {
  const { id } = req.params;
  user = user.filter((user) => user.id !== id);
  res.send(`User ID: ${id} is deleted from database`);
};

exports.UpdateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, Age } = req.body;

  const S_User = user.find((user) => user.id === id);

  if (firstName) {
    S_User.firstName = firstName;
  }
  if (lastName) {
    S_User.lastName = lastName;
  }
  if (Age) {
    S_User.Age = Age;
  }

  res.send(`User ID${id} has been Updated`);
};
