const User = require("../model/UserModel"); 
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, { expiresIn: 3 * 24 * 60 * 60 });
};

module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    
    const user = await User.create({ email, password, username });
    const token = createSecretToken(user._id);
    
    
    res.cookie("token", token, { withCredentials: true, httpOnly: false });
    res.status(201).json({ success: true, user });
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) return res.json({ message: "Incorrect password or email" });
    
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) return res.json({ message: "Incorrect password or email" });
    
    const token = createSecretToken(user._id);
    res.cookie("token", token, { withCredentials: true, httpOnly: false });
    res.status(201).json({ success: true, message: "Logged in successfully" });
  } catch (error) {
    console.error(error);
  }
};


module.exports.VerifyUser = (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.json({ status: false });
  
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) return res.json({ status: false });
    const user = await User.findById(data.id);
    if (user) return res.json({ status: true, user: user.username });
    else return res.json({ status: false });
  });
};

module.exports.Logout = (req, res) => {
  res.cookie("token", "", { expires: new Date(0), httpOnly: false });
  res.status(200).json({ success: true, message: "Logged out successfully" });
};