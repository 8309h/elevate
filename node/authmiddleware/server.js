const express =  require("express");
const { auth } = require("google-auth-library");

const app = express();
app.use(express.json());


const authMiddleware = (req,res,next) => {
      const authHeader = req.headers.authorization;

      if (authHeader === "Bearer secret123") {
            next();
      }else {
            return res.json(401).json({error : "Unauthorised access"})
      }
      

}

app.get("/public",(req,res) => {
      res.status(200).json({"message" : "Welcome This is Public Route",})
})
// protechted Route
app.get("/dashboard", authMiddleware,(req,res) => {
      res.status(200).json({message:"Welcome to dashboard",
            data :["DSA","Node"]
      })
})

app.get("/profile", authMiddleware, (req, res) => {
      res.status(200).json({
            name: "Student User",
            role: "Developer"
      });
});


const PORT = 3001;
app.listen (PORT,() => {
      console.log(`Server Run on port:${PORT}`)
})