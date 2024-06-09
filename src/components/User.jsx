export const Users = [
  {
    id: 1,
    name: "Mike Castillo",
    imgUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    messages: ["Hi, my name is Mike"],
  },
  {
    id: 2,
    name: "Myra Scmidth",
    imgUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    messages: ["Hi, my name is Myra"],
  },
];

export const userMap = new Map();

Users.forEach((user) => userMap.set(user.id, user));

export const count = Users.length;
