import authModel from "../models/authModel.js";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken'

class AuthController {
  static userRegistrtation = async (req, res) => {
    const { username, email, password } = req.body;
    try {
      if (username && email && password) {
        const isUser = await authModel.findOne({ email: email });
        if (!isUser) {
          //password hashing
          const genSalt = await bcryptjs.genSalt(10);
          const hashedPassword = await bcryptjs.hash(password, genSalt);

          //saving a new user
          const newUser = authModel({
            username,
            email,
            password: hashedPassword,
          });
          const savedUser = await newUser.save();
          if (savedUser) {
            return res
              .status(200)
              .json({ message: "User Registerd Successfully" });
          }
        } else {
          return res.status(400).json({ message: "Email Already Registered" });
        }
      } else {
        return res.status(400).json({ message: "all fileds are required" });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
  static userLogin = async (req, res) => {
    // res.send("User Login");
    const{ email,password} =  req.body;
    try {
      if (email && password) {
        const isEmail = await authModel.findOne({email : email})
        if (isEmail) {
          if(isEmail.email=== email && await bcryptjs.compare(password, isEmail.password)){
            //Token generating
            const  token = jwt.sign({userID: isEmail._id}, "HelloHiThisIsBLOGProj", {expiresIn: "2d"})
            return res.status(200).json({ 
              message: "Login Success",
              token,
              name:isEmail.username
             });
          }else{
            return res.status(400).json({ message: "Invalid Credentials" });
          }
        } else {
          return res.status(400).json({ message: "EmailId is not found" });
        }
      } else {
         return res.status(400).json({ message: "All Fields are Required" });
      }
    } catch (error) {
       return res.status(400).json({ message: error.message });
    }
  };
}
export default AuthController;
