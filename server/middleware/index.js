import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

const secret = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1];
    
    let decodedData = jwt?.verify(token, secret);
    req.user = decodedData;

    next();
  } catch (error) {
  }
};

export default auth;
