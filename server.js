const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const schemeRoutes = require("./routes/schemes");
const cors = require("cors");



// dotenv config 
dotenv.config();

//mongodb connection
connectDB();

// rest object
const app = express();

// middlewares 
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
// routes
//app.use("/app/v1/user",require("./routes/userRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));
//app.use("/api/v1/schemes", require("./routes/schemes")); // ✅ Add Schemes Route
app.use("/api/v1/schemes", schemeRoutes);


// port
const port = process.env.PORT || 8080;

// listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`.bgCyan.white
  );
});
