const express =  require("express")

const logger = require("./middleware/logger");
const rateLimiter =  require("./middleware/rateLimiter");

const routes = require("./routes/router")


const app = express();

app.use(express.json());


// global
app.use(logger)
app.use(rateLimiter)


// rutes
app.use("/",routes);

// error handeleing
app.use((err, req, res, next) => {
      console.log(err);

      res.status(500).json({
            error: "Internal Server Error",
      });
});

app.listen(3000,() => {
      console.log(`server running on port 3000`)
})