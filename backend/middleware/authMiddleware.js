import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const jwtAuthMiddleware = async (req, res, next) => {
  //extract token from request headers
  const token = await req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized"
    });
  }
  try {
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};

// compare entered password to hashed password

const comparePassword = (enteredPassword, hashedPassword) => {
  return bcrypt.compare(enteredPassword, hashedPassword);
};

const generateToken = (User) => {
  //generate token
  return jwt.sign(User, process.env.SECRET_KEY);
};

export { jwtAuthMiddleware, generateToken, comparePassword };
