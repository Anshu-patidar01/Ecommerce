import UserModel from "../models/UserModel.js";
import createUser from "../services/user.service.js";
import uservalidation from "./userValidation.js";
import validator from "validator";
const userRegister = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;
    const ValidationError = await uservalidation(req);

    if (ValidationError !== 0) {
      throw new Error(`${ValidationError}`);
    }

    const isValidEmail = await UserModel.find({ "basicInfo.email": email });

    if (isValidEmail != "") {
      throw new Error("Email is not valid.");
    }

    const hashPassword = await UserModel.hashPassword(password);

    const user = await createUser({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });

    const token = user.generateAuthToken();

    res.status(201).json({ user: user, token: token });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Problem while registering", Error: `${error}` });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!validator.isEmail(email)) {
      throw new Error("enter valid email.");
    }
    const user = await UserModel.findOne({ "basicInfo.email": email });
    console.log(user);
    if (!user) {
      throw new Error("Email or password is wrong..");
    }
    const isPasswordMatched = await user.comparePassword(password);
    // console.log(isPasswordMatched);
    if (!isPasswordMatched) {
      throw new Error("Email or password is wrong.");
    }
    const token = await user.generateAuthToken();
    res.cookie("token", token);
    res.json({ message: "login successfull" });
  } catch (error) {
    res.status(400).json({ message: "Problem while login", Error: `${error}` });
  }
};
const userProfile = async (req, res) => {
  const user = await UserModel.find({});
  res.send(user);
};

export { userRegister, userLogin, userProfile };
