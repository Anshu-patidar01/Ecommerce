import validator from "validator";

async function uservalidation(req) {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !email || !password) {
    return "firstname, email and password are required.";
  }
  if (!validator.isEmail(email)) {
    const error = "please enter valid Email address...!";
    return error;
  }

  if (!validator.isLength(firstName, { min: 3, max: 20 })) {
    const error = "Please Enter valid firstname...!";
    return error;
  }

  if (!validator.isStrongPassword(password)) {
    const error = "Please Enter Strong Password...!";
    return error;
  }
  return 0;
}

export default uservalidation;
