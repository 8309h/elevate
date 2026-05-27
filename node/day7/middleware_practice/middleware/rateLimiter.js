const requestTracker = {};
const window_time = 60 *1000
const MAX_REQUEST = 5;

const rateLimiter = (req,res,next) => {
      const ip = req.ip;

      console.log("ip",ip)
      const currentTime = Date.now();

      if(!requestTracker[ip]){
            requestTracker[ip] = [];
      }

      requestTracker[ip] = requestTracker[ip].filter((timestamp) => {
            return currentTime - timestamp < window_time;
      })

      if(requestTracker[ip].length >= MAX_REQUEST) {
            return res.status(429).json({error : "Too Many Request Plaz try after some time"})
      }

      requestTracker[ip].push(currentTime)

      next();
}

module.exports = rateLimiter;