import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created sucessfully" });
  } catch (error) {
    // res.status(409).json({ message: error.message });
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });
    if (!validUser)
      return next(errorHandler(404, "User not found. Invalid email"));
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Invalid password"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashedPassword, ...rest } = validUser._doc;
    console.log("rest🟥:", rest);
    console.log("hashedPassword🟩:", hashedPassword);

    // Set the expiration time for the cookie (e.g., 1 day from now)
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);
    res
      .cookie("access_token", rest, { httpOnly: true, expires: expirationDate })
      .status(200)
      .json(validUser); // httpOnly: true means that the cookie is not accessible from the third party scripts
  } catch (error) {
    next(error);
  }
};
