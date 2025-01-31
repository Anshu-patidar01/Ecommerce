import UserModel from "../models/UserModel.js";
import createUser from "../services/user.service.js";
import uservalidation from "./userValidation.js";
import validator from "validator";
import jwt from "jsonwebtoken";
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
      throw new Error("invalid email.");
    }
    const user = await UserModel.findOne({ "basicInfo.email": email });
    if (!user) {
      throw new Error("Email or password is wrong..");
    }
    const isPasswordMatched = await user.comparePassword(password);
    // console.log(isPasswordMatched);
    if (!isPasswordMatched) {
      throw new Error("Email or password is wrong.");
    }
    const token = await user.generateAuthToken();
    res.cookie("token", token, {
      httpOnly: true,
      SameSite: "None",
      secure: true,
    });
    res.json({ message: "login successfull", token });
  } catch (error) {
    res.status(400).json({ message: "Problem while login1", Error: error });
  }
};

const userProfile = async (req, res) => {
  const user = await UserModel.find({});
  res.send(user);
};

export { userRegister, userLogin, userProfile };
