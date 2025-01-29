import bcrypt from "bcrypt";
const AdminAuth = async (req, res, next) => {
  try {
    const email = req.user.basicInfo.email;
    const password = req.user.basicInfo.password;
    // const { email, password } = req.user;
    if (
      password !=
        "$2b$10$YFZtUzbSpfwYJfnf4UYNT.SbKskiEIdo.eeRM9EwNz1mYgzlQ8udy" ||
      email != "anshupatidar123@gmail.com"
    ) {
      throw new Error("Unautheriezed...");
    }
    next();
  } catch (error) {
    res
      .status(401)
      .json({ message: "problem while admin is login...!", error: `${error}` });
  }
};
export default AdminAuth;
