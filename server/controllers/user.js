import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

import User from '../models/user.js'

dotenv.config()
const secret = process.env.JWT_SECRET

export const signin = async (req, res) => {
    const { email, password } = req.body;

  try {
    const oldUser = await User.findOne({ email });

    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "1h",
    });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
}

export const signup = async (req, res) => {
    const { email, password, birthday, name } = req.body

    try {
        const oldUser = await User.findOne({ email })
        if(oldUser) return res.status(400).json({message: 'User already exsists!'})

        const hashedPassword = await bcrypt.hash(password, 12)

        const result = {email, password: hashedPassword, name, birthday};
        User.create(result)

        const token = jwt.sign({ email: result.email, id: result._id}, secret, {expiresIn:'1h'})

        res.status(200).json({result, token})
    } catch (error) {
        res.status(500).json({message: "Something went wrong!"})
    }
}