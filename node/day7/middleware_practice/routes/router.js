const express =  require("express");

const authMiddleware = require("../middleware/auth");

const router = express.Router();


router.get("/",(req,res) => {
      res.status(200).json("Server Running")
})

router.get("/public",(req,res)=> {
      res.status(200).json({message : "This is a public route"})
})

router.get("/auth",authMiddleware,(req,res)=> {
      res.status(200).json({message : "Procted Route"})
})

router.get("/profile", authMiddleware, (req, res) => {
      res.status(200).json({
            name: "Student User",
            role: "Developer",
            email: "student@example.com"
      });
});

router.patch("/profile", authMiddleware, (req, res) => {
      const { name, role, email } = req.body;

      const updatedProfile = {
            name: name || "Student User",
            role: role || "Developer",
            email: email || "student@example.com"
      };

      res.status(200).json({
            message: "Profile updated successfully",
            profile: updatedProfile,
      });
});

module.exports = router;