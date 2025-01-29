import jwt from "jsonwebtoken";
import userModel from "../models/UserModel.js";
const userAuth = async (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);
  if (!token) {
    return res.status(401).send("Unauthorized...!");
  }
  // const isblacklisted = await blacklistModel.findOne({ token });
  // if (isblacklisted) {
  //   throw new Error("unauthorized...!");
  // }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById({ _id: decoded._id });
    if (!user) {
      return res.status(401).send("Unauthorized...!");
    }
    req.user = user;
    next();
  } catch (error) {
    res
      .status(401)
      .json({ message: "problem while login...!", error: `${error}` });
  }
};
export default userAuth;
