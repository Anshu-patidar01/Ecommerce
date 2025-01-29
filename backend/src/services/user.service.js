import UserModel from "../models/UserModel.js";

const createUser = async ({ firstName, lastName, email, password, role }) => {
  if (!firstName || !email || !password) {
    throw new Error("All fi elds are required...!");
  }
  const user = await UserModel.create({
    basicInfo: {
      fullName: {
        firstName,
        lastName,
      },
      email,
      password,
    },
  });

  return user;
};

export default createUser;
