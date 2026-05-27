const authMiddleware = (req,res,next) => {
      const authHeader = req.headers.authorization;

      if(authHeader === "Bearer secret123"){
            next();
      }else {
            return res.status(401).json({error : "Unautjorised access"})
      }
}

module.exports = authMiddleware;